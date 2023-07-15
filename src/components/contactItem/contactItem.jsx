import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteButton, ListItem } from './contactItem.styled';
import { deleteContact } from 'redux/phoneBookSlice';

export const ContactItem = contact => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      {contact.name}: {contact.number}
      <DeleteButton
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </DeleteButton>
    </ListItem>
  );
};
