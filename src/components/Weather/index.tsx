import './styles.css';
import { useWeather } from 'context/WeatherContext';
import { WeatherForecast, WeatherReport } from 'components';

const Weather = () => {
  const { weatherData } = useWeather();

  return (
    <main className="weather-main">
      <h1>{weatherData?.name}</h1>
      <WeatherReport />
      <WeatherForecast />
    </main>
  );
};

export default Weather;
