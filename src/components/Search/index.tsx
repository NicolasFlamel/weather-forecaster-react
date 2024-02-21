import './styles.css';
import SearchForm from '../SearchForm';

const Search = () => {
  return (
    <search className="weather-search" role="search">
      <h1>Search</h1>
      <SearchForm />
    </search>
  );
};

export default Search;
