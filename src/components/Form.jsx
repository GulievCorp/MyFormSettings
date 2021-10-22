import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstname: yup.string().min(2, 'Слишком короткое имя'),
  lastname: yup.string().min(2, 'Слишком короткая фамилия'),
  email: yup.string().email('Неверная почта').required(),
  password: yup
    .number()
    .min(3, 'Слишком короткий пароль')
    .positive()
    .integer()
    .required('Это обязательное поле'),
});

const defaultValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

export default function Form({ nextStep, setFormValues }) {
  const { handleSubmit, reset, register, formState } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {
    setFormValues(values);
    console.log(values);
    reset();
    nextStep('address');
  };
  return (
    <div>
      <div className="row">
        <TextField
          name="firstname"
          {...register('firstname')}
          helperText={formState.errors.firstname && formState.errors.firstname.message}
          error={!!formState.errors.firstname}
          className="inptTxt"
          label="Имя"
          fullWidth
        />
        <TextField
          {...register('lastname')}
          helperText={formState.errors.lastname && formState.errors.lastname.message}
          error={!!formState.errors.lastname}
          className="inptTxt"
          name="lastname"
          className="inptTxt"
          label="Фамилия"
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          {...register('email')}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          className="inptTxt"
          name="email"
          fullWidth
        />
        <TextField
          {...register('password')}
          helperText={formState.errors.password && formState.errors.password.message}
          error={!!formState.errors.password}
          className="inptTxt"
          name="password"
          type="password"
          label="Пароль"
          fullWidth
        />
      </div>
      <br />
      <div className="row">
        <Button onClick={() => reset()} className="btn" variant="contained" color="secondary">
          Очистить
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          className="btn"
          variant="contained"
          color="primary">
          Далее
        </Button>
      </div>
    </div>
  );
}
