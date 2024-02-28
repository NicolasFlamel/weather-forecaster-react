import './styles.css';
import { useWeather } from 'context/WeatherContext';
import {
  Card,
  WeatherDetail,
  WeatherForecast,
  WeatherReport,
} from 'components';

const Weather = () => {
  const { weatherData, detailedData } = useWeather();

  return (
    <main className="weather-main">
      <Card className="weather-name">
        <h1>{weatherData?.name}</h1>
      </Card>
      {detailedData === null ? (
        <section className="weather-summary">
          <Card>
            <WeatherReport />
          </Card>
          <Card>
            <WeatherForecast />
          </Card>
        </section>
      ) : (
        <WeatherDetail />
      )}
    </main>
  );
};

export default Weather;
