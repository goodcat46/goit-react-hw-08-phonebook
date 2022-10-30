import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/thunks/contactsThunks';
import { fetchEditContact } from 'redux/thunks/contactsThunks';
import { useSelector } from 'react-redux';
import { selectLastEditedId } from 'redux/selectors';

import css from './contact.module.scss';

const Contact = ({ id, name, number }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [isDeleting, setDeleting] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [isEditable, setEditable] = useState(false);
  const lastEditedId = useSelector(selectLastEditedId);
  const dispatch = useDispatch();
  const settersMap = {
    newName: setNewName,
    newNumber: setNewNumber,
  };

  function handleChange(ev) {
    const { name, value } = ev.target;
    settersMap[name](value);
  }

  function handleDeleteContact() {
    dispatch(fetchDeleteContact(id));
    setDeleting(true);
  }
  function handleEditContact() {
    setEditable(!isEditable);
  }
  function handleSubmit(ev) {
    ev.preventDefault();
    setEditing(!isEditing);
    const editedContact = { id: id, obj: { name: newName, number: newNumber } };
    dispatch(fetchEditContact(editedContact));
  }

  useEffect(() => {
    setNewName(name);
    setNewNumber(number);
  }, [name, number]);
  
  useEffect(() => {
    if (id === lastEditedId) {
      setEditing(false);
    }
  }, [id, isEditing, lastEditedId]);

  return (
    <li className={css.contact}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="newName"
          value={newName}
          disabled={!isEditable}
          onChange={handleChange}
        />
        <input
          className={css.input}
          type="text"
          name="newNumber"
          value={newNumber}
          disabled={!isEditable}
          onChange={handleChange}
        />

        {isEditing ? (
          <span className={css.process}>Editing...</span>
        ) : (
          <button
            className={[css.button, isEditable ? css.accept : css.edit].join(
              ' '
            )}
            onClick={handleEditContact}
            type={!isEditable ? 'submit' : 'button'}
            disabled={isEditing}
          >
            {isEditable ? 'Accept' : 'Edit'}
          </button>
        )}
        {isDeleting ? (
        <span className={css.process}>Deleting...</span>
      ) : (
        <button
          className={[css.button, css.del].join(' ')}
          onClick={handleDeleteContact}
          type="button"
        >
          Delete
        </button>
      )}
      </form>      
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Contact;
