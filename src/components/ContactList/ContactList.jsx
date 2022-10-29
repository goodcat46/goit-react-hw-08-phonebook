import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllContacts,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';

import Contact from './Contact/Contact';

import css from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const [filteredContacts, setFilteredContacts] = useState([]);

  function applyFilter() {
    setFilteredContacts(
      contacts.filter(
        ({ name }) =>
          !(filter && !name.toLowerCase().includes(filter.toLowerCase()))
      )
    );
  }
  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line
  }, [filter, contacts]);
  return (
    <div className={css.contactsContainer}>
      <p className={css.listTitle}>
        {`Contacts list`}
        {isLoading && <span className={css.donate}>{` (Loading...)`}</span>}
      </p>
      <ul className={css.contactList}>
        {contacts.length === 0 && (
          <li className={css.notification}>
            <span
              className={css.span}
            >{`Database is empty, please add new contact.`}</span>
          </li>
        )}
        {filteredContacts.map(el => (
          <Contact key={el.id} id={el.id} name={el.name} phone={el.phone} />
        ))}
        {filteredContacts.length === 0 && (
          <li className={css.notification}>
            {filter !== '' && (
              <span
                className={css.span}
              >{`Not founded any contacts on your request - "${filter}". Please try again. `}</span>
            )}
            {filter === '' && (
              <span className={css.span}>{`Please type any name. `}</span>
            )}
            <span className={css.donate}>{`or donate ua army`}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
