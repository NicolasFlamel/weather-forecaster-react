import Button from 'components/Button';
import './styles.css';
import { useUnit, useWeather } from 'context';
import { getSpeedString, getTempString } from 'helpers/convert';

const WeatherReport = () => {
  const { weatherData, setDetailedDataTo, loadingWeather } = useWeather();
  const { isMetric } = useUnit();

  if (loadingWeather) return <h1>Loading Weather</h1>;
  if (!weatherData) {
    console.error('!weatherData');
    return <h1>Error !weatherData</h1>;
  }

  const handleClick = () => {
    setDetailedDataTo(0);
  };

  return (
    <section className="weather-report">
      <h2>Current Weather</h2>
      <section>
        <img
          className="weather-img weather-icon"
          title={weatherData.weather[0].description}
          alt={weatherData.weather[0].description}
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        />
      </section>

      <section>
        <p>Temperature: {getTempString(weatherData.main.temp, isMetric)}</p>
        <p>
          Feels like: {getTempString(weatherData.main.feels_like, isMetric)}
        </p>
        <p>Wind Speed: {getSpeedString(weatherData.wind.speed, isMetric)}</p>
        <p>Humidity: {weatherData.main.humidity + '%'}</p>
      </section>

      <Button onClick={handleClick}>Show More</Button>
    </section>
  );
};

export default WeatherReport;
