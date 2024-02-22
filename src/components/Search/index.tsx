import './styles.css';
import { SearchForm, SearchHistory } from 'components';

const Search = () => {
  return (
    <search className="weather-search" role="search">
      <h1>Search</h1>
      <SearchForm />
      <SearchHistory />
    </search>
  );
};

export default Search;
