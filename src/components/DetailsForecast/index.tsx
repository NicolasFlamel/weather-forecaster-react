import './styles.css';
import { ForecastDataListType } from 'types';
import dayjs from 'dayjs';
import ForecastCard from 'components/ForecastCard';

interface ForecastDetailsProps {
  data: ForecastDataListType[];
}

const ForecastDetails = ({ data }: ForecastDetailsProps) => {
  console.log(data);

  return (
    <section className="forecast-details">
      <h1>Forecast</h1>
      <ul>
        {data.map((forecast) => {
          const forecastDate = dayjs(forecast.dt_txt);
          const tempConverted = ((forecast.main.temp - 273.15) * 9) / 5 + 32;
          const speedConverted = forecast.wind.speed * 2.237;

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
                <p>Temperature: {tempConverted.toFixed(2) + ' °F'}</p>
                <p>Wind Speed: {speedConverted.toFixed(2) + ' MPH'}</p>
                <p>Humidity: {forecast.main.humidity + '%'}</p>
                <p>Precipitation: {forecast.pop * 100}%</p>
              </ForecastCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ForecastDetails;
