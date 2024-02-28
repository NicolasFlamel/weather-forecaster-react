import { useContext, createContext, useState, useEffect } from 'react';
import setTheme from 'Themes';
import {
  WeatherDataType,
  ForecastDataType,
  ForecastDataListType,
  ForecastDayRange,
} from 'types';

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
  detailedData: WeatherDataType | ForecastDataListType[] | null;
  setDetailedDataTo: (day: ForecastDayRange | null) => void;
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
  const [weatherData, setWeatherData] = useState<WeatherDataType>();
  const [forecastData, setForecastData] = useState<ForecastDataType>();
  const [detailedData, setDetailedData] = useState<
    WeatherDataType | ForecastDataListType[] | null
  >(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoadingWeather(true);
    getWeather(controller.signal);

    return () => controller.abort();
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    if (detailedData === null && weatherData) {
      setTheme(weatherData?.weather[0]);
    } else if (Array.isArray(detailedData)) {
      setTheme(detailedData[4].weather[0]);
    } else if (detailedData) {
      setTheme(detailedData.weather[0]);
    } else setTheme();
  }, [weatherData, detailedData]);

  const getWeather = async (signal: AbortSignal) => {
    console.log('fetching data');
    const key = process.env.REACT_APP_OPEN_WEATHER_KEY;
    const weatherURL = new URL(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${key}&units=metric`,
    );
    const forecastURL = new URL(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${key}&units=metric`,
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

      localStorage.setItem('weatherJSON', JSON.stringify(weatherJSON));
      localStorage.setItem('forecastJSON', JSON.stringify(forecastJSON));

      setWeatherData(weatherJSON);
      setForecastData(forecastJSON);
      setLoadingWeather(false);
    } catch (err) {
      // if (err instanceof DOMException && err.name === 'AbortError') return;
      // else console.error(err);
    }
  };

  const setDetailedDataTo = (day: ForecastDayRange | null) => {
    if (day === null) setDetailedData(null);
    else if (day === 0 && weatherData) setDetailedData(weatherData);
    else if (forecastData) {
      const section = day - 1;
      // data is split in intervals of 3 hours from 00:00 to 24:00
      // slice gets list data from 00:00 to 21:00 depending on index passed
      const forecastDayList = forecastData.list.slice(
        section * 8,
        section * 8 + 8,
      );

      setDetailedData(forecastDayList);
    } else {
      console.error('setDetailedDataTo failed');
    }
  };

  const value = {
    setLocation,
    weatherData,
    forecastData,
    detailedData,
    setDetailedDataTo,
    loadingWeather,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
