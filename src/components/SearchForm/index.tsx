import './styles.css';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useWeather } from 'context/WeatherContext';
import { ReactComponent as SearchIcon } from 'assets/images/search-icon-100.svg';

type Inputs = {
  city: string;
};

const SearchForm = () => {
  const { setLocation } = useWeather();
  const [searchLocation, setSearchLocation] = useState('sacramento');
  const [userSearch, setUserSearch] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({ shouldUnregister: true });

  useEffect(() => {
    const controller = new AbortController();
    const fetchLocation = async (city: string, signal: AbortSignal) => {
      const key = process.env.REACT_APP_OPEN_WEATHER_KEY;
      const url = new URL(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`,
      );

      try {
        const response = await fetch(url, { signal });

        if (!response.ok) return;

        const [{ lat, lon }] = await response.json();

        setLocation({ lat, lon });
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocation(searchLocation, controller.signal);

    return () => controller.abort();
  }, [searchLocation, setLocation]);

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { city } = data;

    setSearchLocation(city);
    setUserSearch(false);
  };

  return (
    <section className="search-bar">
      {userSearch ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="search-input">
            <input
              autoFocus
              placeholder={'City Name'}
              {...register('city', {
                required: true,
                onBlur: (e) => setUserSearch(false),
              })}
            />
          </section>
          {errors.city && (
            <section className="search-error">
              <p>Cannot be empty</p>
            </section>
          )}
        </form>
      ) : (
        <Button onClick={() => setUserSearch(true)}>
          <SearchIcon className="search-icon" />
        </Button>
      )}
    </section>
  );
};

export default SearchForm;
