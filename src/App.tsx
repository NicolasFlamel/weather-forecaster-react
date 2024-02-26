import './App.css';
import { Header, Weather } from './components';
import { ThemeProvider, WeatherProvider } from 'context';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <ThemeProvider>
          <Header />
          <Weather />
        </ThemeProvider>
      </WeatherProvider>
    </div>
  );
}

export default App;
