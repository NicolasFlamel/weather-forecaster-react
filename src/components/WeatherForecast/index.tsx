import './styles.css';
import dayjs from 'dayjs';
import { useWeather } from 'context/WeatherContext';
import { ForecastCard } from 'components';
import { ForecastDayRange } from 'types';

const WeatherForecast = () => {
  const { forecastData, setDetailedDataTo, loadingWeather } = useWeather();
  const forecastArray = forecastData?.list.filter((forecast) =>
    // filter for weather at 9 am
    (forecast.dt / 3600) % 24 === 9 ? true : false,
  );

  const handleClick = (section?: ForecastDayRange) => {
    if (!forecastData) return console.error(!forecastData);

    if (!section) setDetailedDataTo(0);
    else if (section > 0 && section < 5) setDetailedDataTo(section);
    else console.error();
  };

  if (loadingWeather) return <h1>Loading Weather</h1>;

  return (
    <section className="forecast">
      <h1>Forecast</h1>
      <ol className="forecast-list">
        {forecastArray?.map((forecast, index) => {
          const forecastDate = dayjs(forecast.dt_txt);
          const tempConverted = ((forecast.main.temp - 273.15) * 9) / 5 + 32;
          const speedConverted = forecast.wind.speed * 2.237;

          return (
            <li key={forecast.dt}>
              <ForecastCard
                onClick={() => handleClick((index + 1) as ForecastDayRange)}
              >
                <img
                  className="weather-img weather-icon"
                  title={forecast.weather[0].description}
                  alt={forecast.weather[0].description}
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                />
                <p>{forecastDate.format('dddd')}</p>
                <p>Temperature: {tempConverted.toFixed(2) + ' °F'}</p>
                <p>Wind Speed: {speedConverted.toFixed(2) + ' MPH'}</p>
                <p>Humidity: {forecast.main.humidity + '%'}</p>
                <p>Precipitation: {forecast.pop * 100}%</p>
              </ForecastCard>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default WeatherForecast;
