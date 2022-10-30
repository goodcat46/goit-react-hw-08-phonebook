import React from 'react';

import Title from 'components/Title/Title';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

import scss from './MainPage.module.scss';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

const MainPage = () => {
  const { isLoged } = useSelector(selectUserData);
  return (
    <>
    {!isLoged && <Navigate to="/signin" replace={true} />}
      <div className={scss.MainPage}>
        <Title title="Add contact" />
        <ContactForm />
        <Title title="Find contact" />
        <Filter />
      </div>
    </>
  );
};

export default MainPage;
