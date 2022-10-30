import React from 'react';

import Title from 'components/Title/Title';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

import scss from './ContactsPage.module.scss';

const ContactsPage = () => {
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

export default ContactsPage;
