import './styles.css';
import { useRef, useState } from 'react';
import { useWeather } from 'context/WeatherContext';
import { WeatherDetail, WeatherForecast, WeatherReport } from 'components';
import { ForecastDataListType } from 'types';

const Weather = () => {
  const { weatherData } = useWeather();
  const weatherDetails = useRef<ForecastDataListType>();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="weather-main">
      <h1>{weatherData?.name}</h1>
      {!showDetails ? (
        <section className="weather-summary">
          <WeatherReport />
          <WeatherForecast
            weatherDetails={weatherDetails}
            setShowDetails={setShowDetails}
          />
        </section>
      ) : (
        <WeatherDetail
          weatherDetails={weatherDetails.current}
          setShowDetails={setShowDetails}
        />
      )}
    </main>
  );
};

export default Weather;
