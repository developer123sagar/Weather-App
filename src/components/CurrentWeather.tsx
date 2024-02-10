const CurrentWeather = () => {
  return (
    <div className="w-[20rem] rounded bg-[#333] text-white shadow mx-auto mt-5 px-5 pb-5">
      <ul className="flex-between">
        <li>
          <p className="font-semibold leading-4 tracking-wider">Kathmandu</p>
          <p className="font-normal text-sm leading-6">Sunny</p>
        </li>
        <img src="/icons/01d.png" alt="weather" className="" />
      </ul>
      <div className="flex-between">
        <p className="font-semibold text-6xl">18°C</p>
        <ul className="w-full pl-5">
          <li className="parameter-row border-b border-white mb-2">
            <span className="text-base">Details</span>
          </li>
          <li className="parameter-row">
            <span className="parameter-label">Feels</span>
            <span className="parameter-value">22°C</span>
          </li>
          <li className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </li>
          <li className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </li>
          <li className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">20 hpa</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeather;
