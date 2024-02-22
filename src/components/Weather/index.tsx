import './styles.css';
import { WeatherForecast, WeatherReport } from 'components';

const Weather = () => {
  return (
    <main className="weather-main">
      <WeatherReport />
      <WeatherForecast />
    </main>
  );
};

export default Weather;
