import React, { useState, } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { userRegister } from 'redux/thunks/authThunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from '@mui/material';

import LetterAvatar from 'components/LetterAvatar/LetterAvatar';

import scss from './SignUpPage.module.scss';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [values, setValues] = useState({
    login: '',
    email: '',
    password: '',
  });
  const navigateTo = useNavigate();

  const dispatch = useDispatch();

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      await dispatch(
        userRegister({
          name: values.login,
          email: values.email,
          password: values.password,
        })
      )
        .unwrap()
        .then(() => {
          navigateTo('/contacts');
        });
    } catch (error) {
      console.log(error);
    }
    setValues({
      login: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className={scss.signUpPage}>
      <div className={scss.wrapper}>
        <LetterAvatar login={values.login} />
        <p className={scss.pageName}>Registration </p>
      </div>
      <form className={scss.signUpForm} onSubmit={handleSubmit}>
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-login">Login</InputLabel>
          <OutlinedInput
            id="outlined-adornment-login"
            type={'text'}
            value={values.login}
            onChange={handleChange('login')}
            label="Login"
            required
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
            required
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
            required
          />
        </FormControl>
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;
