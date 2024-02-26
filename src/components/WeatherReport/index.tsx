import Button from 'components/Button';
import './styles.css';
import { useWeather } from 'context/WeatherContext';

const WeatherReport = () => {
  const { weatherData, setDetailedDataTo, loadingWeather } = useWeather();

  if (loadingWeather) return <h1>Loading Weather</h1>;
  if (!weatherData) {
    console.error('!weatherData');
    return <h1>Error !weatherData</h1>;
  }

  const tempConverted = ((weatherData.main.temp - 273.15) * 9) / 5 + 32;
  const speedConverted = weatherData.wind.speed * 2.237;

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
        <p>Temperature: {tempConverted.toFixed(2) + ' °F'}</p>
        <p>Wind Speed: {speedConverted.toFixed(2) + ' MPH'}</p>
        <p>Humidity: {weatherData.main.humidity + '%'}</p>
      </section>
      <Button onClick={handleClick}>Show More</Button>
    </section>
  );
};

export default WeatherReport;
