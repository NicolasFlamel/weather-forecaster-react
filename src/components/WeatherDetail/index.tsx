import './styles.css';
import { useWeather } from 'context/WeatherContext';
import { Button, ExpandedForecast, ExpandedReport } from 'components';

const WeatherDetail = () => {
  const { detailedData, setDetailedDataTo } = useWeather();

  if (detailedData === null) return <h1>Error</h1>;

  const handleClose = () => {
    setDetailedDataTo(null);
  };

  return (
    <section className="weather-details">
      <h1>Detailed Weather</h1>
      <Button className="close-details close-btn" onClick={handleClose}>
        X
      </Button>
      {Array.isArray(detailedData) ? (
        <ExpandedForecast data={detailedData} />
      ) : (
        <ExpandedReport data={detailedData} />
      )}
    </section>
  );
};

export default WeatherDetail;
