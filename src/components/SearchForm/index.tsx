import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Button';

type Inputs = {
  city: string;
};

const SearchForm = () => {
  const { handleSubmit, register } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder={'City Name'} {...register('city')} />
      <Button type={'submit'}>Submit</Button>
    </form>
  );
};

export default SearchForm;
