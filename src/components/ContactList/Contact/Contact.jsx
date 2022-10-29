import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/contactThunk';

import css from './contact.module.css';

const Contact = ({ id, name, phone }) => {
  const [isDeleting, setDeleting] = useState(false);
  const dispatch = useDispatch();

  function handleAddContact() {
    dispatch(fetchDeleteContact(id));
    setDeleting(true)
  }
  return (
    <li className={css.contact}>
      <span className={css.name}>{name}</span>
      <span className={css.phone}>{phone}</span>
      {isDeleting ? (
        <span className={css.process}>Deleting...</span>
      ) : (
        <button className={css.button} onClick={handleAddContact} type="button">
          Delete
        </button>
      )}
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Contact;
