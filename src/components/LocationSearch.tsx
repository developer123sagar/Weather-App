/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { GEO_URL, geoApiOptions } from "../constants";
import { CityOptions, LocationSearchProps } from "../types";

export const LocationSearch = ({
  label,
  placeH,
  onSearchChange,
}: LocationSearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const [cityOptions, setCityOptions] = useState<CityOptions[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<CityOptions | null>(null);

  useEffect(() => {
    const handleLocationData = async () => {
      try {
        const res = await fetch(
          `${GEO_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
          geoApiOptions
        );

        const result = await res.json();
        setOpen(true);
        setCityOptions(
          result?.data?.map((city: any) => ({
            lat: city.latitude,
            long: city.longitude,
            label: `${city.name}, ${city.countryCode}`,
          })) || []
        );
      } catch (err: any) {
        console.log(err);
      }
    };

    if (inputValue) {
      handleLocationData();
    } else {
      setOpen(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (selectedCity) {
      onSearchChange(selectedCity);
      setInputValue(selectedCity.label);
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [selectedCity]);

  return (
    <div className="w-[90%] lg:w-full font-medium h-auto mx-auto">
      {label && (
        <label className="block text-sm font-medium leading-6 text-label">
          {label}
        </label>
      )}
      <div className="relative flex-between">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setOpen(true);
          }}
          placeholder={placeH}
          className="w-full placeholder:text-tertiry p-2 text-sm font-medium leading-6 border-[1px] rounded-[4px] bg-slate-50 form-control"
        />
        <img
          src="/search.svg"
          alt="search"
          className="w-[20px] h-[20px] object-contain cursor-pointer absolute right-3"
        />
      </div>
      <ul
        className={`bg-gray-200 mt-1 overflow-y-auto rounded-[8px] custom-scrollbar ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {cityOptions.map((item, id) => (
          <li
            key={`${item.lat} ${id}`}
            className="p-2 text-sm hover:text-gray-500 cursor-pointer transition duration-200 ease-in-out"
            onClick={() => setSelectedCity(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
