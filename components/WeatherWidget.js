import Image from "next/image";
import useSWR from "swr";
import { format, isToday, isTomorrow } from "date-fns";

const apiKey = process.env.WEATHER_API_KEY;

const endpoint = `https://api.weatherapi.com/v1/forecast.json?key=5e1f0e7d4d1a46b29f4173037222602&q=Melbourne&days=3&aqi=no&alerts=no`;
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const dayFormatter = (date) => {
  if (isToday(new Date(date))) {
    return "Today";
  } else if (isTomorrow(new Date(date))) {
    return "Tomorrow";
  }
  return "Day After Tomorrow";
};

export default function WeatherWidget() {
  const { data, error } = useSWR(endpoint, fetcher);
  //   console.log("forecast", data?.forecast);

  if (error)
    return (
      <div className="">
        <span>Error while fetching forecast data.</span>
      </div>
    );

  return (
    <div className="flex flex-col  ">
      {data?.forecast?.forecastday.map((day, i) => (
        <div className="flex items-center" key={i}>
          <span>{dayFormatter(day.date)}</span>
          <Image
            src={`http://${day.day.condition.icon}`}
            alt={day.day.condition.text}
            width={30}
            height={30}
            layout="fixed"
            className="dark:grayscale dark:contrast-50"
          />
        </div>
      ))}
    </div>
  );
}
