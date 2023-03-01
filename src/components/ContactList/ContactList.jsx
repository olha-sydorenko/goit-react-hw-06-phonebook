import React from 'react';
import { List } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectFilteredContacts } from 'redux/contactsSelector';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {contacts?.length > 0 &&
        contacts.map(contact => {
          return <Contact key={contact.id} {...contact} />;
        })}
    </List>
  );
};
