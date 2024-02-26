import './App.css';
import { Header, Weather } from './components';
import { ThemeProvider, UnitProvider, WeatherProvider } from 'context';

function App() {
  return (
    <div className="App">
      <UnitProvider>
        <WeatherProvider>
          <ThemeProvider>
            <Header />
            <Weather />
          </ThemeProvider>
        </WeatherProvider>
      </UnitProvider>
    </div>
  );
}

export default App;
