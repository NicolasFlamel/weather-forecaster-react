import './styles.css';
import { Search } from 'components';

const Header = () => {
  return (
    <header className="weather-header">
      <h1>Weather Dashboard</h1>
      <Search />
    </header>
  );
};

export default Header;
