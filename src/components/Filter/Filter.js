import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Filtername } from './Filter.styled';
import { Label } from './Filter.styled';

const inputFilterId = nanoid(5);

export const Filter = ({ value, onChange }) => (
  <Filtername>
    <Label htmlFor={inputFilterId}>Find contacts by name</Label>
    <input type="name" value={value} onChange={onChange} id={inputFilterId} />
  </Filtername>
);

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
