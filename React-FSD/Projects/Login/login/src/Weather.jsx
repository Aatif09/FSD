import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const city = "Ghaziabad";
    const apiKey = "bd5d6db1c55613f81c60eed85271139e";
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return <div>Loading weather data...</div>;

  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;
