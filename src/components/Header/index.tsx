import './styles.css';
import { Button, Card, Search } from 'components';
import { useUnit } from 'context';

const Header = () => {
  const { isMetric, toggleMetric } = useUnit();

  return (
    <header className="weather-header">
      <Card className="header-card">
        <h1>Weather Dashboard</h1>
        <section className="controls">
          <Search />
          <Button className="convert-unit" onClick={toggleMetric}>
            {isMetric ? 'C°' : 'F°'}
          </Button>
        </section>
      </Card>
    </header>
  );
};

export default Header;
