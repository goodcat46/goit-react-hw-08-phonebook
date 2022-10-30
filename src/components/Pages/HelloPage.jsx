import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { useNavigate } from 'react-router';
import scss from './HelloPage.module.scss';

const HelloPage = () => {
  const { isLoggedIn } = useSelector(selectUserData);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigateTo('/contacts');
    }
  });
  return <div className={scss.Hello}>Hello!</div>;
};

export default HelloPage;
