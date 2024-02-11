import { useState } from "react";

import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";
import { LocationSearch } from "./components/LocationSearch";
import { CityOptions } from "./types";
import { WEATHER_API_KEY, WEATHER_BASE_URL } from "./constants";

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleOnSearchChange = (searchData: CityOptions) => {
    const currentWeatherFetch = fetch(
      `${WEATHER_BASE_URL}/weather?lat=${searchData.lat}&lon=${searchData.long}&&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_BASE_URL}/forecast?lat=${searchData.lat}&lon=${searchData.long}&&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();

        setCurrentWeatherData({ city: searchData.label, ...weatherRes });
        setForecastData({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-1/2 mx-auto">
      <LocationSearch
        placeH="Enter your city"
        label="Search Location"
        onSearchChange={handleOnSearchChange}
      />
      {currentWeatherData && <CurrentWeather data={currentWeatherData} />}
      {forecastData && <WeatherForecast data={forecastData} />}
    </div>
  );
}

export default App;
