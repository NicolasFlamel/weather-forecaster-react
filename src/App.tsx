import './App.css';
import { Header, Weather } from './components';
import { UnitProvider, WeatherProvider } from 'context';

function App() {
  return (
    <div className="App">
      <UnitProvider>
        <WeatherProvider>
          <Header />
          <Weather />
        </WeatherProvider>
      </UnitProvider>
    </div>
  );
}

export default App;
