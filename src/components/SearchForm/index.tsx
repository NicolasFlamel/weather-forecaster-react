import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'components';
import { useWeather } from 'context/WeatherContext';

type Inputs = {
  city: string;
};

const SearchForm = () => {
  const { setLocation } = useWeather();
  const [searchLocation, setSearchLocation] = useState('sacramento');
  const [disable, setDisabled] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    const controller = new AbortController();
    setDisabled(true);

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
        setDisabled(false);
      } catch (error) {
        setDisabled(false);
        console.error(error);
      }
    };

    fetchLocation(searchLocation, controller.signal);

    return () => controller.abort();
  }, [searchLocation, setLocation]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { city } = data;
    setSearchLocation(city);

    setDisabled(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.city && <section>Cannot be empty</section>}
      <input
        placeholder={'City Name'}
        {...register('city', { required: true })}
      />
      <Button type={'submit'} disabled={disable}>
        Submit
      </Button>
    </form>
  );
};

export default SearchForm;
