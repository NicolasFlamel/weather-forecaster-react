import './styles.css';
import { Dispatch, SetStateAction } from 'react';
import setTheme from 'Themes';
import { Button } from 'components';
import { useUnit, useWeather } from 'context';
import { getSpeedString, getTempString } from 'helpers/convert';

interface WeatherReportProps {
  setView: Dispatch<SetStateAction<boolean>>;
}

const WeatherReport = ({ setView }: WeatherReportProps) => {
  const { weatherData, setDetailedDataTo, loadingWeather } = useWeather();
  const { isMetric } = useUnit();

  if (loadingWeather) return <h1>Loading Weather</h1>;
  else if (!weatherData) {
    console.error('!weatherData');
    return <h1 className="error">Error !weatherData</h1>;
  } else {
    setTheme(weatherData.weather[0]);
  }

  const handleClick = () => {
    setDetailedDataTo(0);
    setView((prev) => !prev);
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
