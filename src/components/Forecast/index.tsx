import './styles.css';
import { useWeather } from 'context/WeatherContext';

const Forecast = () => {
  const { forecastData, loadingWeather } = useWeather();
  const forecastArray = forecastData?.list.filter((forecast) =>
    // get the days at 9 am
    (forecast.dt / 3600) % 24 === 9 ? true : false,
  );

  if (loadingWeather) return <h1>Loading Weather</h1>;

  return (
    <section className="forecast">
      <h1>Forecast</h1>
      <ol>
        {forecastArray?.map((forecast) => {
          const tempConverted = ((forecast.main.temp - 273.15) * 9) / 5 + 32;
          const speedConverted = forecast.wind.speed * 2.237;

          return (
            <li key={forecast.dt}>
              <p>Date: {forecast.dt_txt}</p>
              <p>Temperature: {tempConverted.toFixed(2) + ' °F'}</p>
              <p>Wind Speed: {speedConverted.toFixed(2) + ' MPH'}</p>
              <p>Humidity: {forecast.main.humidity + '%'}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Forecast;
