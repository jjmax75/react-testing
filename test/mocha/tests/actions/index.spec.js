import React from 'react';

// import testing suite
import expect from 'expect';

// import components
import * as actions from '../../../../src/js/actions';

describe( 'Actions tests', () => {
	
	it( 'addTodo - Should take an action to add a todo', () => {
		const text = "Walk the dog";
		const expectedAction = {
			id: 0,
			type: 'ADD_TODO',
			text
		};
		
		expect( actions.addTodo( text ) ).toEqual( expectedAction );
	});
	
	it( 'setVisibilityFilter - Should set the visibility filter', () => {
		const filter = 'SHOW_ACTIVE';
		const expectedAction = {
			type: 'SET_VISIBILITY_FILTER',
			filter
		};
		
		expect( actions.setVisibilityFilter( filter ) ).toEqual( expectedAction );
	});
	
	
});