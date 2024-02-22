import Forecast from 'components/Forecast';
import './styles.css';
import { useLocation } from 'context/LocationContext';
import { useWeather } from 'context/WeatherContext';

const Weather = () => {
  const { locationName } = useLocation();
  const { weatherData, loadingWeather } = useWeather();

  if (loadingWeather) return <h1>Loading Weather</h1>;
  if (!weatherData) return <h1>Error !weatherData</h1>;

  const tempConverted = ((weatherData.main.temp - 273.15) * 9) / 5 + 32;
  const speedConverted = weatherData.wind.speed * 2.237;

  return (
    <main className="weather-main">
      <h1>Weather</h1>
      <h2>Current location: {locationName}</h2>
      <h3>Weather Data: </h3>
      <section>
        <h4>{weatherData.name}</h4>
        <img
          className="weather-img weather-icon"
          title={weatherData.weather[0].description}
          alt={weatherData.weather[0].description}
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        />
      </section>
      <section>
        <p>Temperature: {tempConverted.toFixed(2) + ' °F'}</p>
        <p>Wind Speed: {speedConverted.toFixed(2) + ' MPH'}</p>
        <p>Humidity: {weatherData.main.humidity + '%'}</p>
      </section>
    </main>
  );
};

export default Weather;
