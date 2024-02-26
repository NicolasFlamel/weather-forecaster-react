import { useWeather } from 'context/WeatherContext';
import './styles.css';
import Button from 'components/Button';

interface WeatherDetailProps {
  setShowDetails: React.Dispatch<boolean>;
}

const WeatherDetail = ({ setShowDetails }: WeatherDetailProps) => {
  const { detailedData, setDetailedDataTo } = useWeather();

  const handleClose = () => {
    setDetailedDataTo(null);
  };

  console.log(detailedData);

  return (
    <section className="weather-details">
      <h1>Detailed Weather</h1>
      <Button className="close-details close-btn" onClick={handleClose}>
        X
      </Button>
    </section>
  );
};

export default WeatherDetail;
