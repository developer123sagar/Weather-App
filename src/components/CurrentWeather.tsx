/* eslint-disable @typescript-eslint/no-explicit-any */

const CurrentWeather = ({ data }: { data: any }) => {

  return (
    <div className="w-[90%] my-5 lg:w-[20rem] rounded bg-[#333] text-white shadow mx-auto mt-5 px-5 pb-5">
      <ul className="flex-between">
        <li>
          <p className="font-semibold leading-4 tracking-wider">{data.city}</p>
          <p className="font-normal text-sm leading-6">
            {data?.weather[0]?.description}
          </p>
        </li>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className=""
        />
      </ul>
      <div className="flex-between">
        <p className="font-semibold text-6xl">{Math.round(data.main.temp)}°C</p>
        <ul className="w-full pl-5">
          <li className="parameter-row border-b border-white mb-2">
            <span className="text-base">Details</span>
          </li>
          <li className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </li>
          <li className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </li>
          <li className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </li>
          <li className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hpa</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeather;
