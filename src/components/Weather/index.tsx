import './styles.css';
import { useWeather } from 'context/WeatherContext';
import { WeatherDetail, WeatherForecast, WeatherReport } from 'components';

const Weather = () => {
  const { weatherData, detailedData } = useWeather();

  return (
    <main className="weather-main">
      <h1>{weatherData?.name}</h1>
      {detailedData === null ? (
        <section className="weather-summary">
          <WeatherReport />
          <WeatherForecast />
        </section>
      ) : (
        <WeatherDetail />
      )}
    </main>
  );
};

export default Weather;
