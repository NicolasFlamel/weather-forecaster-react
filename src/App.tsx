import './App.css';
import { Header, Search, Weather } from './components';
import { WeatherProvider, LocationProvider } from 'context';

function App() {
  return (
    <div className="App">
      <Header />
      <LocationProvider>
        <WeatherProvider>
          <Search />
          <Weather />
        </WeatherProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
