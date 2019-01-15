import { createStore } from 'redux';
import mainReducer from './Reducers.js';

const configureStore = () => {
	return createStore(mainReducer, { color: "blue"});	
}
export default configureStore;