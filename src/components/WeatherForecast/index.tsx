import './styles.css';
import dayjs from 'dayjs';
import { useUnit, useWeather } from 'context';
import { Card } from 'components';
import { ForecastDayRange } from 'types';
import { getSpeedString, getTempString } from 'helpers/convert';

const WeatherForecast = () => {
  const { forecastData, setDetailedDataTo, loadingWeather } = useWeather();
  const { isMetric } = useUnit();
  const forecastArray = forecastData?.list.filter((forecast) =>
    // filter for weather at 9 am
    (forecast.dt / 3600) % 24 === 9 ? true : false,
  );

  const handleClick = (section?: ForecastDayRange) => {
    if (!forecastData) return console.error(!forecastData);

    if (!section) setDetailedDataTo(0);
    else if (section > 0 && section < 6) setDetailedDataTo(section);
    else console.error('handleClick', section);
  };

  if (loadingWeather) return <h1>Loading Weather</h1>;

  return (
    <section className="forecast">
      <h2>Forecast</h2>
      <ol className="forecast-list">
        {forecastArray?.map((forecast, index) => {
          const forecastDate = dayjs(forecast.dt_txt);

          return (
            <li key={forecast.dt}>
              <Card
                className="forecast-card"
                onClick={() => handleClick((index + 1) as ForecastDayRange)}
              >
                <img
                  className="weather-img weather-icon"
                  title={forecast.weather[0].description}
                  alt={forecast.weather[0].description}
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                />
                <p className="forecast-date">
                  {forecastDate.format('ddd | DD')}
                </p>

                <article className="forecast-data">
                  <p>Temp: {getTempString(forecast.main.temp, isMetric)}</p>
                  <p>
                    Fees like:{' '}
                    {getTempString(forecast.main.feels_like, isMetric)}
                  </p>
                </article>
                <article className="forecast-data">
                  <p>
                    Wind Speed: {getSpeedString(forecast.wind.speed, isMetric)}
                  </p>
                  <p>Precipitation chance: {Math.floor(forecast.pop * 100)}%</p>
                </article>
              </Card>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default WeatherForecast;
