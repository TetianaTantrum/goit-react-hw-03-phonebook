import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { ContactListUl, Contact } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListUl>
      {contacts.map(contact => (
        <Contact key={contact.id}>
          <ContactListItem contact={contact} onDelete={onDelete} />
        </Contact>
      ))}
    </ContactListUl>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
