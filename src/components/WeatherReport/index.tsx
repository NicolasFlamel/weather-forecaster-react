import Button from 'components/Button';
import './styles.css';
import { useWeather } from 'context/WeatherContext';
import { getSpeedString, getTempString } from 'helpers/convert';

const WeatherReport = () => {
  const { weatherData, setDetailedDataTo, isMetric, loadingWeather } =
    useWeather();

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
      <h1>Current Weather</h1>
      <section>
        <img
          className="weather-img weather-icon"
          title={weatherData.weather[0].description}
          alt={weatherData.weather[0].description}
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
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
