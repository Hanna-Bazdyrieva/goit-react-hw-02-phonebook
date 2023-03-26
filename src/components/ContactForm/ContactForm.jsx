import { Component } from 'react';
import PropTypes from 'prop-types';
// import { Button } from './FeedbackOptions.styled';
import { Box } from 'components/Box/Box';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  static defaultProps = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  // static propTypes = {
  //   options: PropTypes.array.isRequired,
  // };
  state = {
    // contacts: [],
    // filter: '',
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    console.log('ContactForm -> state', this.state);
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    // const buttons = this.props.options;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <Box display="flex" flexDirection="column" mx="auto" my={4} width={2}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type="text"
            name="name"
            id={this.nameInputId}
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor={this.numberInputId}>Number</label>
          <input
            type="text"
            id={this.numberInputId}
            placeholder="Enter Number"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
          />

          <button type="submit">Add contact</button>
        </Box>
      </form>
    );
  }
}
export default ContactForm;

// {
//   /* {buttons.map(btn => {
//   return (
//     // <Button
//     //   key={btn}
//     //   type="button"
//     //   value={btn}
//     //   onClick={event => {
//     //     this.props.onLeaveFeedback(event);
//     //   }}
//     // >
//     //   {btn}
//     // </Button>
//   );
// })} */
// }
