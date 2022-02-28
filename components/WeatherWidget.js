import Image from "next/image";
import useSWR from "swr";
import { isToday, isTomorrow } from "date-fns";

const apiKey = process.env.WEATHER_API_KEY;

const endpoint = `https://api.weatherapi.com/v1/forecast.json?key=5e1f0e7d4d1a46b29f4173037222602&q=Melbourne&days=3&aqi=no&alerts=no`;

const headers = {
  "Transfer-Encoding": "chunked",
  Connection: "keep-alive",
  Vary: "Accept-Encoding",
  "CDN-PullZone": "93447",
  "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
  "CDN-RequestCountryCode": "GB",
  "CDN-ProxyVer": "1.02",
  "CDN-RequestPullSuccess": "True",
  "CDN-RequestPullCode": "200",
  "CDN-CachedAt": "02/28/2022 13:24:43",
  "CDN-EdgeStorageId": "576",
  "CDN-Status": "200",
  "CDN-RequestId": "5408fc7cc0057ba09f7ad6afac3a3b6e",
  "CDN-Cache": "MISS",
  "Cache-Control": "public, max-age=180",
  "Content-Type": "application/json",
};

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
  const { data, error } = useSWR([endpoint, headers], fetcher);
  console.log(data);
  // console.log("forecast", data?.forecast);

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
            src={`https://${day.day.condition.icon}`}
            alt={day.day.condition.text}
            width={30}
            height={30}
            layout="fixed"
            priority
            className="dark:grayscale dark:contrast-50"
          />
        </div>
      ))}
    </div>
  );
}
