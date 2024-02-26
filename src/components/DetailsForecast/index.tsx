import './styles.css';
import { ForecastDataListType } from 'types';
import dayjs from 'dayjs';
import ForecastCard from 'components/ForecastCard';
import { getSpeedString, getTempString } from 'helpers/convert';
import { useWeather } from 'context/WeatherContext';

interface ForecastDetailsProps {
  data: ForecastDataListType[];
}

const ForecastDetails = ({ data }: ForecastDetailsProps) => {
  const { isMetric } = useWeather();

  return (
    <section className="forecast-details">
      <h1>Forecast</h1>
      <ul>
        {data.map((forecast) => {
          const {
            dt_txt,
            main: { temp, feels_like, humidity },
            wind: { speed },
          } = forecast;
          const forecastDate = dayjs(dt_txt);

          return (
            <li key={forecast.dt}>
              <ForecastCard>
                <img
                  className="weather-img weather-icon"
                  title={forecast.weather[0].description}
                  alt={forecast.weather[0].description}
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                />
                <p>{forecastDate.format('dddd: hh:mm A')}</p>
                <p>Temperature: {getTempString(temp, isMetric)}</p>
                <p>Fees like: {getTempString(feels_like, isMetric)}</p>
                <p>Wind Speed: {getSpeedString(speed, isMetric)}</p>
                <p>Humidity: {humidity + '%'}</p>
                <p>Precipitation chance: {Math.floor(forecast.pop * 100)}%</p>
              </ForecastCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ForecastDetails;
