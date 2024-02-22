import { useContext, createContext, useState, useEffect } from 'react';
import { useLocation } from './LocationContext';
import { WeatherDataType, ForecastDataType } from 'types';

type WeatherProviderProps = {
  children: React.ReactNode;
};

interface WeatherContextInterface {
  weatherData: WeatherDataType | undefined;
  forecastData: ForecastDataType | undefined;
  loadingWeather: boolean;
}

const defaultState = {} as WeatherContextInterface;

const WeatherContext = createContext(defaultState);

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherDataType>();
  const [forecastData, setForecastData] = useState<ForecastDataType>();
  const {
    locationData: { lat, lon },
  } = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    setLoadingWeather(true);
    getWeather(controller.signal);

    return () => controller.abort();
    // eslint-disable-next-line
  }, [lat, lon]);

  const getWeather = async (signal: AbortSignal) => {
    const key = process.env.REACT_APP_OPEN_WEATHER_KEY;
    const weatherURL = new URL(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`,
    );
    const forecastURL = new URL(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`,
    );

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(weatherURL, { signal }),
        fetch(forecastURL, { signal }),
      ]);

      if (!weatherResponse.ok && !forecastResponse.ok) return;

      const [weatherJSON, forecastJSON] = await Promise.all([
        weatherResponse.json(),
        forecastResponse.json(),
      ]);

      setWeatherData(weatherJSON);
      setForecastData(forecastJSON);
      setLoadingWeather(false);
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return;
      else console.error(err);
    }
  };

  const value = { weatherData, forecastData, loadingWeather };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

// {
//   "name": "Sacramento",
//   "lat": 38.5810606,
//   "lon": -121.493895,
//   "country": "US",
//   "state": "California"
// }
