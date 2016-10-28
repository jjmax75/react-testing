import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilters';

const todoApp = combineReducers({
	todos,
	visibilityFilter
});

export default todoApp;