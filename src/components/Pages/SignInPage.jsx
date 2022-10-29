import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from '@mui/material';
import LetterAvatar from 'components/LetterAvatar/LetterAvatar';

import scss from './SignInPage.module.scss';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    login: '',
    email: '',
    password: '',
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleSubmit = evt => {
    evt.preventDefault();
  };
  return (
    <>
      <div className={scss.signInPage}>
        <div className={scss.userInfo}>
          <LetterAvatar login={values.login} />
          <p className={scss.userName}>{values.login?values.login:'User Name'}</p>
        </div>
        <form className={scss.signInForm} onSubmit={handleSubmit}>
          <FormControl sx={{ width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-login">Login</InputLabel>
            <OutlinedInput
              id="outlined-adornment-login"
              type={'text'}
              value={values.login}
              onChange={handleChange('login')}
              label="Login"
            />
          </FormControl>
          <FormControl sx={{ width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type={'email'}
              value={values.email}
              onChange={handleChange('email')}
              label="Email"
            />
          </FormControl>
          <FormControl sx={{ width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button variant="contained" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignInPage;