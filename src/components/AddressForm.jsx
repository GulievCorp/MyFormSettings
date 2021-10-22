import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  city: yup.string().required('Укажите город'),
  street: yup.string().required('Укажите улицу'),
  appartament: yup.number().min(2, 'Слишком короткое значение').required('Укажите номер квартиры'),
});

const defaultValues = {
  city: '',
  street: '',
  appartament: null,
};

export default function AddressForm({ nextStep, setFormValues }) {
  const { handleSubmit, reset, register, formState } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {
    setFormValues((prev) => {
      return { ...prev, ...values };
    });
    reset();
    nextStep('result');
  };
  return (
    <div>
      <div className="row">
        <TextField
          name="city"
          {...register('city')}
          helperText={formState.errors.city && formState.errors.city.message}
          error={!!formState.errors.city}
          className="inptTxt"
          label="Город"
          fullWidth
        />
        <br />
        <TextField
          {...register('street')}
          helperText={formState.errors.street && formState.errors.street.message}
          error={!!formState.errors.street}
          className="inptTxt"
          name="street"
          className="inptTxt"
          label="Улица"
          fullWidth
        />
        <br />
        <TextField
          {...register('appartament')}
          helperText={formState.errors.appartament && formState.errors.appartament.message}
          error={!!formState.errors.appartament}
          className="inptTxt"
          name="appartament"
          className="inptTxt"
          type="number"
          label="Номер квартиры"
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
