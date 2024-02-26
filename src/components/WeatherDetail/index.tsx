import './styles.css';
import { useWeather } from 'context/WeatherContext';
import { Button, ForecastDetails, ReportDetails } from 'components';

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
        <ForecastDetails data={detailedData} />
      ) : (
        <ReportDetails data={detailedData} />
      )}
    </section>
  );
};

export default WeatherDetail;
