import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation } from 'context/LocationContext';
import { Button } from 'components';

type Inputs = {
  city: string;
};

const SearchForm = () => {
  const { updateLocation } = useLocation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateLocation(data.city);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.city && <section>Cannot be empty</section>}
      <input
        placeholder={'City Name'}
        {...register('city', { required: true })}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  );
};

export default SearchForm;
