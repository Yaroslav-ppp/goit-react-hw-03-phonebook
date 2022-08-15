import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form } from './ContactForm.styled';
import { Input } from './ContactForm.styled';
import { Label } from './ContactForm.styled';
import { Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid(5);
  inputNumberId = nanoid(5);

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    console.log(event.currentTarget.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input>
          <Label htmlFor={this.inputNameId}>Name</Label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.inputNameId}
          />
        </Input>
        <Input>
          <Label htmlFor={this.inputNumberId}>Number</Label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.inputNumberId}
          />
        </Input>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
