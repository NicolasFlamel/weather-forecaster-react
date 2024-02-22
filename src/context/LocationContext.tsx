import { useContext, createContext, useState, useEffect } from 'react';

// type for provider props
type LocationProviderProps = {
  children: React.ReactNode;
};

// interface for
interface LocationContextInterface {
  locationName: string;
  updateLocation: Function;
  locationData: {
    country: string;
    lat: number;
    lon: number;
    name: string;
    state?: string;
  };
  loadingLocation: boolean;
}

const defaultState = {
  locationName: 'sacramento',
  locationData: {
    country: 'US',
    lat: 38.5810606,
    lon: -121.493895,
    name: 'Sacramento',
    state: 'California',
  },
  updateLocation: (locationName: string) => {},
  loadingLocation: false,
} as LocationContextInterface;

const LocationContext = createContext(defaultState);

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [locationName, setLocationName] = useState('sacramento');
  const [locationData, setLocationData] = useState({
    country: 'US',
    lat: 38.5810606,
    lon: -121.493895,
    name: 'Sacramento',
    state: 'California',
  });

  useEffect(() => {
    const controller = new AbortController();

    setLoadingLocation(true);
    getCoordinates(controller.signal);

    return () => controller.abort();
    // eslint-disable-next-line
  }, [locationName]);

  const updateLocation = (place: string) => {
    setLocationName(place);
  };

  const getCoordinates = async (signal: AbortSignal) => {
    const key = process.env.REACT_APP_OPEN_WEATHER_KEY;
    const url = new URL(
      `https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=5&appid=${key}`,
    );
    try {
      const response = await fetch(url, { signal });

      if (!response.ok) return;

      const data = await response.json();

      setLocationData(data[0]);
      setLoadingLocation(false);
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return;
      else console.error(err);
    }
  };

  const value = { locationName, updateLocation, locationData, loadingLocation };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
