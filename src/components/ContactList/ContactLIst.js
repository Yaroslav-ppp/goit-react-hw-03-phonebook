import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './ContactList.styled';
import { Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDelContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id}>
        <p>
          {name}: {number}
        </p>
        <Button onClick={() => onDelContact(id)}>Delete</Button>
      </Contact>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelContact: PropTypes.func,
};
