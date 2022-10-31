import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

import Title from 'components/Title/Title';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

import scss from './ContactsPage.module.scss';

const ContactsPage = () => {
  const { isLoggedIn } = useSelector(selectUserData);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigateTo('/signin', { replace: true });
      return
    }
  });
  return (
    <div className={scss.MainPage}>
      <Title title="Add contact" />
      <ContactForm />
      <Title title="Find contact" />
      <Filter />
    </div>
  );
};

export default ContactsPage;
