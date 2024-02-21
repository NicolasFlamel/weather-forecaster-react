import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'components';

type Inputs = {
  city: string;
};

const SearchForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
