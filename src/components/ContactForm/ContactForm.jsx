import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddContact } from 'redux/contactThunk';
import { selectAllContacts } from 'redux/selectors';

import css from './contactForm.module.css';

const ContactForm = () => {
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const contacts = useSelector(selectAllContacts);

  const dispatch = useDispatch();

  const setersMap = {
    inputName: setInputName,
    inputNumber: setInputNumber,
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setersMap[name](value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const namesArr = contacts.map(el => el.name);
    if (!namesArr.includes(inputName.toLocaleLowerCase())) {
      dispatch(
        fetchAddContact({
          name: inputName,
          phone: inputNumber,
        })
      );
    } else {
      alert(`"${inputName}" is already in contact.`);
    }
    setInputName('');
    setInputNumber('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input
        className={css.input}
        type="text"
        name="inputName"
        id="name"
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={inputName}
        required
        onChange={handleChange}
      />

      <label className={css.label} htmlFor="number">
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        name="inputNumber"
        id="number"
        placeholder="Enter number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={inputNumber}
        required
        onChange={handleChange}
      />

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
