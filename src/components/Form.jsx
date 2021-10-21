import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const defaultValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

export default function Form() {
  const { handleSubmit, reset, register, formState } = useForm({ defaultValues });
  const onSubmit = (values) => {
    console.log(values);
    reset();
  }
  return (
    <div>
      <div className="row">
        <TextField
          name="firstname"
          {...register('firstname', {
            required: 'Это обязательное поле',
          })}
          helperText={formState.errors.firstname && formState.errors.firstname.message}
          error={!!formState.errors.firstname}
          className="inptTxt"
          label="Имя"
          fullWidth
        />
        <TextField
          {...register('lastname', {
            required: 'Это обязательное поле',
          })}
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
          {...register('email', {
            required: 'Это обязательное поле',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          className="inptTxt"
          name="email"
          fullWidth
        />
        <TextField
          {...register('password', {
            required: 'Это обязательное поле',
          })}
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
        <Button
          onClick={handleSubmit(onSubmit)}
          className="btn"
          variant="contained"
          color="primary">
          Зарегистрироваться
        </Button>
        <Button
          onClick={() => reset()}
          className="btn"
          variant="contained"
          color="secondary">
          Очистить
        </Button>
      </div>
    </div>
  );
}
