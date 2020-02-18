import React from 'react';
import selectedContact from './../actions/selectContact';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class ContactList extends React.Component {
  renderList() {
    return this.props.contacts.map((contact) => {
      return (
        <li
        key={contact.phone}
        onClick={() => this.props.selectContact(contact)}
        className='list-group-item'>{contact.name}</li>
      );
    });
  }

  render() {
    return (
      <ul className = 'list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectContact: selectedContact}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
