/* eslint-disable @typescript-eslint/no-explicit-any */
import { WEEKS_OF_DAYS } from "../constants";
import Accordian from "./Accrodian";

const WeatherForecast = ({ data }: any) => {
  const dayOfWeek = new Date().getDay();
  const forecastDays = WEEKS_OF_DAYS.slice(
    dayOfWeek,
    WEEKS_OF_DAYS.length
  ).concat(WEEKS_OF_DAYS.slice(0, dayOfWeek));

  const AccrodianTitle = ({
    img,
    day,
    description,
    temp,
  }: {
    img: string;
    day: string;
    description: string;
    temp: string;
  }) => {
    return (
      <div className="flex items-center text-sm cursor-pointer w-full">
        <img src={img} alt="forecast" className="w-10" />
        <label htmlFor="title" className="text-[#212121] ml-4 flex flex-1">
          {day}
        </label>
        <label htmlFor="description" className="flex flex-1 mr-4 text-right">
          {description}
        </label>
        <label htmlFor="temprature" className="text-gray-500">
          {temp}
        </label>
      </div>
    );
  };

  const AccrodianValue = ({
    pressure,
    humidity,
    clouds,
    wind,
    sea_level,
    feels_like,
  }: {
    pressure: number;
    humidity: number;
    clouds: number;
    wind: number;
    sea_level: number;
    feels_like: number;
  }) => {
    return (
      <div className="daily-details">
        <div className="daily-details-item">
          <label>Pressure:</label>
          <label>{pressure}</label>
        </div>
        <div className="daily-details-item">
          <label>Humidity:</label>
          <label>{humidity}%</label>
        </div>
        <div className="daily-details-item">
          <label>Clouds:</label>
          <label>{clouds}%</label>
        </div>
        <div className="daily-details-item">
          <label>Wind speed:</label>
          <label>{wind} m/s</label>
        </div>
        <div className="daily-details-item">
          <label>Sea level:</label>
          <label>{sea_level}m</label>
        </div>
        <div className="daily-details-item">
          <label>Feels like:</label>
          <label>{feels_like}°C</label>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1 className="font-bold text-xl">Daily</h1>
      {data.list.splice(0, 7).map((item: any, id: any) => (
        <div
          key={id}
          className="bg-[#f5f5f5] h-auto rounded-md m-2 py-[6px] px-5 cursor-pointer"
        >
          <Accordian
            title={
              <AccrodianTitle
                img={`icons/${item.weather[0].icon}.png`}
                day={forecastDays[id]}
                description={item.weather[0].description}
                temp={`${Math.round(item.main.temp_min)}°C / ${Math.round(
                  item.main.temp_max
                )}°C`}
              />
            }
            value={
              <AccrodianValue
                pressure={item.main.pressure}
                humidity={item.main.humidity}
                clouds={item.clouds.all}
                wind={item.wind.speed}
                sea_level={item.main.sea_level}
                feels_like={item.main.feels_like}
              />
            }
          />
        </div>
      ))}
    </>
  );
};

export default WeatherForecast;
