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
  const { weatherData, loadingWeather } = useWeather();
  const [summaryView, setSummaryView] = useState(true);
  const summaryRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLElement>(null);
  const nodeRef = summaryView ? summaryRef : detailsRef;

  if (loadingWeather) return <h1>Loading</h1>;

  return (
    <main className="weather-main">
      <section className="weather-name">
        <Card>
          <h1>
            {weatherData?.name} - {weatherData?.sys.country}
          </h1>
        </Card>
      </section>
      <SwitchTransition>
        <CSSTransition
          key={summaryView ? 'summary' : 'details'}
          nodeRef={nodeRef}
          classNames="balloon"
          addEndListener={(done: () => void) => {
            if (!nodeRef.current) return done();

            nodeRef.current.addEventListener('transitionend', done, false);
          }}
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
