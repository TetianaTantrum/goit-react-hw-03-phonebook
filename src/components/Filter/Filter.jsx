import React from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Text } from './Filter.styled';

const Filter = ({ value, count, onChange }) => {
  return (
    <Form action="">
      <Label>
        Find contacts by name{' '}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={value}
          onChange={onChange}
        />
      </Label>
      <Text>Contacts found: {count}</Text>
    </Form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
