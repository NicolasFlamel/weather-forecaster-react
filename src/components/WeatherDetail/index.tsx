import './styles.css';
import Button from 'components/Button';
import { ForecastDataListType } from 'types';

interface WeatherDetailProps {
  weatherDetails: ForecastDataListType | undefined;
  setShowDetails: React.Dispatch<boolean>;
}

const WeatherDetail = ({
  weatherDetails,
  setShowDetails,
}: WeatherDetailProps) => {
  console.log(weatherDetails);

  return (
    <section className="weather-details">
      <h1>Detailed Weather</h1>
      <Button onClick={() => setShowDetails(false)}>X</Button>
    </section>
  );
};

export default WeatherDetail;
