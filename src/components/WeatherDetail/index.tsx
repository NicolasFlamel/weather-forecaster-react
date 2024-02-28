import './styles.css';
import { useWeather } from 'context/WeatherContext';
import { Button, Card, ExpandedForecast, ExpandedReport } from 'components';

const WeatherDetail = () => {
  const { detailedData, setDetailedDataTo } = useWeather();

  if (detailedData === null) return <h1>Error</h1>;

  const handleClose = () => {
    setDetailedDataTo(null);
  };

  return (
    <Card className="weather-details">
      <h2>Detailed Weather</h2>
      <Button className="close-details close-btn" onClick={handleClose}>
        X
      </Button>
      {Array.isArray(detailedData) ? (
        <ExpandedForecast data={detailedData} />
      ) : (
        <ExpandedReport data={detailedData} />
      )}
    </Card>
  );
};

export default WeatherDetail;
