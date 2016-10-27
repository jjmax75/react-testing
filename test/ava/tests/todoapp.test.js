import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import TodoApp from '../../../src/js/TodoApp';

test( '<TodoApp /> basic/shallow tests', t => {
	const wrapper = shallow( <TodoApp /> );
	
	t.plan( 5 );
	
	t.is( 1, 2, '1 should be equal to 1' );
	
	t.truthy( wrapper, 'should render the component' );
	
	t.truthy( wrapper.find( 'h3' ), 'Should have an h3 tag' );
	
	t.truthy( wrapper.find( 'TodoList' ), 'should have a todolist tag' );
	
	t.truthy( wrapper.find( 'form'), 'should have a form tag' );
	
	//t.truthy( wrapper.handleChange, 'function handleChange should be defined' );
	
});

test( '<TodoApp /> mount tests', t => {
	
});

//it( 'should have change and submit handlers defined', () => {
//	expect( wrapper.handleChange ).to.be.defined;
//	expect( wrapper.handleSubmit ).to.be.defined;
//});