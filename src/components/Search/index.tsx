import './styles.css';
import { SearchForm } from 'components';

const Search = () => {
  return (
    <search className="weather-search" role="search">
      <SearchForm />
    </search>
  );
};

export default Search;
