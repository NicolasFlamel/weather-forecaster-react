import './App.css';
import { Header, Weather } from './components';
import { WeatherProvider } from 'context';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Header />
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
