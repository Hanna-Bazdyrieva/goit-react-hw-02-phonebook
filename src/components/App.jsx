import { Component } from 'react';
import { Box } from 'components/Box/Box';
import Section from './Section';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log('App -> data:', data);
  };

  render() {
    return (
      <Box mx="auto" my={0} px="0" py={5} bg="container">
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        {/* <div>
        <h1>Phonebook</h1>
        <ContactForm ... />

        <h2>Contacts</h2>
        <Filter ... />
        <ContactList ... />
      </div> */}
      </Box>
    );
  }
}

export default App;
