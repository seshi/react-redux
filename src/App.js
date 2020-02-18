import React, { Component } from 'react';
import './App.css';

import ContactList from './Components/ContactList';
import ContactDetail from './Components/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: null
    }
  }

  render() {
    return (
      <div className="App">
        <ContactList contacts={this.state.contacts} />
        <ContactDetail />
      </div>
    );
  }
}

export default App;
