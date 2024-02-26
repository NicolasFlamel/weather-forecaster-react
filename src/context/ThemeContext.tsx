import { useContext, createContext, useState, useEffect } from 'react';
import { clearSky } from 'Themes';
import { useWeather } from './WeatherContext';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeType =
  | 'clear-sky'
  | 'few-clouds'
  | 'scattered-clouds'
  | 'broken-clouds'
  | 'shower-rain'
  | 'rain'
  | 'thunderstorm'
  | 'snow'
  | 'mist';

interface ThemeContextInterface {
  theme: ThemeType;
  updateThemeTo: (inputTheme: ThemeType) => void;
}

const defaultState = { theme: clearSky } as ThemeContextInterface;

const ThemeContext = createContext(defaultState);

/**
 * @property { ThemeType } theme
 * @property { (inputTheme: ThemeType) => void } updateThemeTo
 */
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(clearSky);
  const { weatherData } = useWeather();

  useEffect(() => {
    document.body.classList.value = theme;
  }, []);

  const updateThemeTo = (inputTheme: ThemeType) => {
    setTheme(inputTheme);
  };

  const value = { theme, updateThemeTo };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
