import './App.css';
import { Header, Search, Weather } from './components';
import { WeatherProvider, LocationProvider } from 'context';

function App() {
  return (
    <div className="App">
      <LocationProvider>
        <WeatherProvider>
          <Header />
          <Weather />
        </WeatherProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
