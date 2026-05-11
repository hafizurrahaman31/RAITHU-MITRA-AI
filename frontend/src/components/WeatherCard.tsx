"use client";

import { useEffect, useState } from "react";

type WeatherResponse = {
  main?: {
    temp: number;
    humidity: number;
  };
  weather?: {
    main: string;
  }[];
};

export default function WeatherCard() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
        );

        const data = (await response.json()) as WeatherResponse;
        console.log(data);

        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather?.main || !weather.weather?.[0]) {
    return (
      <div
        className="
        mt-6
        bg-blue-100
        rounded-3xl
        p-5
      "
      >
        Loading weather...
      </div>
    );
  }

  return (
    <div
      className="
    bg-blue-100
    rounded-3xl
    p-5
    shadow-sm
  "
    >
      <h2
        className="
      text-lg
      font-semibold
      text-blue-800
    "
      >
        ☁ Weather Today
      </h2>

      <div
        className="
      mt-4
      space-y-3
    "
      >
        <div
          className="
        flex
        items-center
        justify-between
      "
        >
          <span className="text-gray-600">🌡 Temperature</span>

          <span
            className="
          font-semibold
          text-gray-800
        "
          >
            {weather.main.temp}°C
          </span>
        </div>

        <div
          className="
        flex
        items-center
        justify-between
      "
        >
          <span className="text-gray-600">💧 Humidity</span>

          <span
            className="
          font-semibold
          text-gray-800
        "
          >
            {weather.main.humidity}%
          </span>
        </div>

        <div
          className="
        flex
        items-center
        justify-between
      "
        >
          <span className="text-gray-600">🌥 Condition</span>

          <span
            className="
          font-semibold
          text-gray-800
        "
          >
            {weather.weather[0].main}
          </span>
        </div>
      </div>
    </div>
  );
}
