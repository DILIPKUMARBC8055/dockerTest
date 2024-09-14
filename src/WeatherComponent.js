import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch("https://localhost:44389/WeatherForecast");
      console.log(response);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="weather-container">
      {weatherData.map((item, index) => (
        <div key={index} className="weather-card">
          <img src="https://www.gconnect.in/gc22/wp-content/uploads/2024/09/imd-weather-forecast.jpg" alt="Weather Icon" />
          <h3>{item.date}</h3>
          <p>
            Temperature: {item.temperatureC}°C / {item.temperatureF}°F
          </p>
          <p>Summary: {item.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
