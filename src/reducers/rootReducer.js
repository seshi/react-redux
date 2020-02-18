import { combineReducers } from 'redux';

import ContactsReducer from './contactList'
import ActiveContactReducer from './activeContact'

const rootReducer = combineReducers({
	contacts: ContactsReducer,
	activeContact: ActiveContactReducer
});

export default rootReducer;
