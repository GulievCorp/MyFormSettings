import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Form() {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleClickClear = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
  };

  const handleClickRegister = () => {
    const form = {
      firstname,
      lastname,
      email,
      password,
    };
    console.log(form);
    handleClickClear();
  };

  return (
    <div>
      <div className="row">
        <TextField
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          className="inptTxt"
          label="Имя"
          fullWidth
        />
        <TextField
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          className="inptTxt"
          label="Фамилия"
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="inptTxt"
          label="E-mail"
          fullWidth
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="inptTxt"
          label="Пароль"
          fullWidth
        />
      </div>
      <br />
      <div className="row">
        <Button onClick={handleClickRegister} className="btn" variant="contained" color="primary">
          Зарегистрироваться
        </Button>
        <Button onClick={handleClickClear} className="btn" variant="contained" color="secondary">
          Очистить
        </Button>
      </div>
    </div>
  );
}
