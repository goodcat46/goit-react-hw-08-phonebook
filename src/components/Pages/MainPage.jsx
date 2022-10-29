import React from 'react';

import Title from 'components/Title/Title';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

import scss from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={scss.MainPage}>
      <Title title="Add contact" />
      <ContactForm />
      <Title title="Find contact" />
      <Filter />
    </div>
  );
};

export default MainPage;
