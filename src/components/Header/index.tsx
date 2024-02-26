import './styles.css';
import { useWeather } from 'context/WeatherContext';
import { Button, Search } from 'components';

const Header = () => {
  const { isMetric, changeMetric } = useWeather();
  return (
    <header className="weather-header">
      <h1>Weather Dashboard</h1>
      <Button className="convert-unit" onClick={changeMetric}>
        {isMetric ? 'C°' : 'F°'}
      </Button>
      <Search />
    </header>
  );
};

export default Header;
