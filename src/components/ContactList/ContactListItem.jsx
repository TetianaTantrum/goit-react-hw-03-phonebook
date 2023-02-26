import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item } from './ContactListItem.styled';

const ContactListItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <Item>
        {name}: {number}
      </Item>
      <Button type="submit" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactListItem;
