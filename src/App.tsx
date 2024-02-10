import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import { LocationSearch } from "./components/LocationSearch";
import { WEATHER_API_KEY, WEATHER_BASE_URL } from "./constants";
import { CityOptions } from "./types";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData: CityOptions) => {
    console.log(searchData);
    const currentWeatherFetch = fetch(
      `${WEATHER_BASE_URL}/weather?lat=${searchData.lat}&lon=${searchData.long}&&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${WEATHER_BASE_URL}/forecast?lat=${searchData.lat}&lon=${searchData.long}&&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(currentWeather)
  console.log(forecast)

  return (
    <div className="w-1/2 mx-auto">
      <LocationSearch
        placeH="Enter your city"
        label="Search Location"
        onSearchChange={handleOnSearchChange}
      />
      <CurrentWeather />
    </div>
  );
}

export default App;
