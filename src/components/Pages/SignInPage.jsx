import React, { useState, useEffect } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { userLogIn } from 'redux/thunks/authThunks';
import { selectUserData } from 'redux/selectors';
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

import scss from './SignInPage.module.scss';
const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const { isLoggedIn } = useSelector(selectUserData);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

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
    dispatch(userLogIn({ email: values.email, password: values.password }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigateTo('/contacts');
    }
  });
  return (
    <>
      {/* {isLoggedIn && <Navigate to="/contacts" replace={true} />} */}
      <div className={scss.signInPage}>
        <div className={scss.wrapper}>
          <LetterAvatar />
          <p className={scss.pageName}>Sign In</p>
        </div>
        <form className={scss.signInForm} onSubmit={handleSubmit}>
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
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignInPage;
