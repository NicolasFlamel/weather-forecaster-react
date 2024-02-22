import { useLocation } from 'context/LocationContext';
import './styles.css';
import { WeatherForecast, WeatherReport } from 'components';

const Weather = () => {
  const { locationData } = useLocation();

  return (
    <main className="weather-main">
      <h1>{locationData.name}</h1>
      <WeatherReport />
      <WeatherForecast />
    </main>
  );
};

export default Weather;
