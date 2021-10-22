import React from 'react';
import { Paper } from '@mui/material';

export const Result = ({ formValues }) => {
  return (
    <Paper style={{ padding: 30 }}>
      <h2>Итоговая информация</h2>
      <ul>
        <li>Имя: {formValues.firstname}</li>
        <li>Фамилия: {formValues.lastname}</li>
        <li>Почта: {formValues.email}</li>
        <li>Город: {formValues.city}</li>
        <li>Улица: {formValues.street}</li>
      </ul>
    </Paper>
  );
};
