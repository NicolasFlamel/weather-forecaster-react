import './styles.css';
import { useWeather } from 'context/WeatherContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import {
  Card,
  WeatherDetail,
  WeatherForecast,
  WeatherReport,
} from 'components';
import { useRef, useState } from 'react';

const Weather = () => {
  const { weatherData } = useWeather();
  const [summaryView, setSummaryView] = useState(true);
  const summaryRef = useRef(null);
  const detailsRef = useRef(null);
  const nodeRef = summaryView ? summaryRef : detailsRef;

  return (
    <main className="weather-main">
      <Card className="weather-name">
        <h1>{weatherData?.name}</h1>
      </Card>
      <SwitchTransition>
        <CSSTransition
          key={summaryView ? 'summary' : 'details'}
          nodeRef={nodeRef}
          classNames="balloon"
          timeout={500}
        >
          {summaryView ? (
            <section
              className="weather-display weather-summary "
              ref={summaryRef}
            >
              <Card>
                <WeatherReport />
              </Card>
              <Card>
                <WeatherForecast setView={setSummaryView} />
              </Card>
            </section>
          ) : (
            <section
              className="weather-display weather-details"
              ref={detailsRef}
            >
              <WeatherDetail setView={setSummaryView} />
            </section>
          )}
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
};

export default Weather;
