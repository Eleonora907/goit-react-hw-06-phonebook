import React from 'react';
import { ContactItem } from 'components/contactItem/contactItem';
import { List } from './contactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/phoneBookSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = filterContacts();

  return (
    <List>
      {filteredContacts.map((contact, index) => {
        return <ContactItem {...contact} key={contact.id} index={index} />;
      })}
    </List>
  );
};
