import WeatherWidget from "./WeatherWidget";

export default function Footer() {
  return (
    <div className="text-blue dark:text-black pt-4  border-t border-t-steel border-dashed grid grid-cols-2 min-h-[20vh]">
      <div className="flex flex-col">
        <h6>Terrain</h6>
        <h6>Maybe display some solar server data, address, or something</h6>
      </div>
      <div>
        <span>Forecast</span>
        <WeatherWidget />
      </div>
    </div>
  );
}
