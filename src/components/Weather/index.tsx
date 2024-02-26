import './styles.css';
import { useState } from 'react';
import { useWeather } from 'context/WeatherContext';
import { WeatherDetail, WeatherForecast, WeatherReport } from 'components';

const Weather = () => {
  const { weatherData, detailedData } = useWeather();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="weather-main">
      <h1>{weatherData?.name}</h1>
      {detailedData === null ? (
        <section className="weather-summary">
          <WeatherReport />
          <WeatherForecast setShowDetails={setShowDetails} />
        </section>
      ) : (
        <WeatherDetail setShowDetails={setShowDetails} />
      )}
    </main>
  );
};

export default Weather;
