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
      <h1>Forecast</h1>
      <ol className="forecast-list">
        {forecastArray?.map((forecast, index) => {
          const forecastDate = dayjs(forecast.dt_txt);

          return (
            <li key={forecast.dt}>
              <Card
                onClick={() => handleClick((index + 1) as ForecastDayRange)}
              >
                <img
                  className="weather-img weather-icon"
                  title={forecast.weather[0].description}
                  alt={forecast.weather[0].description}
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                />
                <p>{forecastDate.format('dddd')}</p>

              </Card>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default WeatherForecast;
