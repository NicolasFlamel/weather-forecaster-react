import { useContext, createContext, useState, useEffect } from 'react';
import { WeatherDataType, ForecastDataType } from 'types';

type WeatherProviderProps = {
  children: React.ReactNode;
};

type LocationType = {
  lat: number;
  lon: number;
};

interface WeatherContextInterface {
  setLocation: React.Dispatch<LocationType>;
  weatherData: WeatherDataType | undefined;
  forecastData: ForecastDataType | undefined;
  loadingWeather: boolean;
}

const defaultState = {} as WeatherContextInterface;

const WeatherContext = createContext(defaultState);

/**
 * @property {React.Dispatch<LocationType>} setLocation
 * @property {WeatherDataType} weatherData
 * @property {ForecastDataType} forecastData
 * @property {boolean} loadingWeather
 */
export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [location, setLocation] = useState<LocationType>({
    lat: 36.7783,
    lon: -121.493895,
  });
  const [weatherData, setWeatherData] = useState<WeatherDataType>(
    {} as WeatherDataType,
  );
  const [forecastData, setForecastData] = useState<ForecastDataType>();

  useEffect(() => {
    const controller = new AbortController();

    setLoadingWeather(true);
    getWeather(controller.signal);

    return () => controller.abort();
    // eslint-disable-next-line
  }, [location]);

  const getWeather = async (signal: AbortSignal) => {
    const key = process.env.REACT_APP_OPEN_WEATHER_KEY;
    const weatherURL = new URL(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${key}`,
    );
    const forecastURL = new URL(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${key}`,
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

  const value = { setLocation, weatherData, forecastData, loadingWeather };

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
