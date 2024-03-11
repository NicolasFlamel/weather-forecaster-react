import './styles.css';
import { useWeather } from 'context/WeatherContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import {
  Card,
  WeatherDetail,
  WeatherForecast,
  WeatherReport,
} from 'components';
import { useRef } from 'react';

const Weather = () => {
  const { weatherData, detailedData } = useWeather();
  const summaryRef = useRef(null);
  const detailsRef = useRef(null);
  const nodeRef = detailedData === null ? summaryRef : detailsRef;

  return (
    <main className="weather-main">
      <Card className="weather-name">
        <h1>{weatherData?.name}</h1>
      </Card>
      <SwitchTransition>
        <CSSTransition
          key={detailedData === null ? 'summary' : 'details'}
          nodeRef={nodeRef}
          classNames="fade"
          timeout={100}
        >
          {detailedData === null ? (
            <section className="weather-summary" ref={summaryRef}>
              <Card>
                <WeatherReport />
              </Card>
              <Card>
                <WeatherForecast />
              </Card>
            </section>
          ) : (
            <section className="weather-details" ref={detailsRef}>
              <WeatherDetail />
            </section>
          )}
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
};

export default Weather;
