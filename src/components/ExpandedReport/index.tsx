import './styles.css';
import { useUnit } from 'context';
import { Card } from 'components';
import { WeatherDataType } from 'types';
import { getSpeedString } from 'helpers/convert';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

interface ReportDetailsProps {
  data: WeatherDataType;
}

const ExpandedReport = ({ data }: ReportDetailsProps) => {
  const {
    main,
    weather: [currentWeather],
    wind,
    clouds,
  } = data;
  const { isMetric } = useUnit();

  const imgStyles = { transform: `rotate(${wind.deg}deg)` };

  return (
    <section className="report-details">
      <h2>Current Report</h2>
      <section className="current-detailed-weather">
        <section>
          <img
            className="weather-icon"
            alt={currentWeather.description}
            src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
          />
          <p>{currentWeather.description}</p>
        </section>
      </section>
      <section className="details-data">
        <Card>
          <h3>Wind</h3>
          <p>
            <ArrowIcon
              title={wind.deg + 'º'}
              style={imgStyles}
              className="arrow-icon"
            />
            {' ' + getSpeedString(wind.speed, isMetric)}
          </p>
        </Card>
        <Card>
          <h3>Temp</h3>
          <section className="temp">
            <p className="temp-main">{main.temp}</p>
            <section className="min-max">
              <p className="temp-min">{main.temp_min}</p>
              <p className="temp-max">{main.temp_max}</p>
            </section>
          </section>
        </Card>
        <Card>
          <h3>Clouds</h3>
          <p>{clouds.all}% Cloudiness</p>
        </Card>
      </section>
    </section>
  );
};

export default ExpandedReport;
