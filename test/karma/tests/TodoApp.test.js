import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import TodoApp from '../../../src/js/components/App';

describe( '<TodoApp /> basic/shallow tests', () => {
	
	const renderer = TestUtils.createRenderer();
	renderer.render( <TodoApp /> );
	let result = renderer.getRenderOutput();
	
	it( 'Should be equal', () => {
		expect( 1 ).toEqual( 1 );
	});
	
	it( 'Should render the component', () => {
		expect( result.type ).toBe( 'div' );
	});
	
	it( 'Should have an h3 tag', () => {
		expect( result.props.children[0].type ).toBe('h3');
	});
});


describe( '<TodoApp /> full render tests', () => {
	
	const todoapp = TestUtils.renderIntoDocument( <TodoApp /> );
	
	it( 'Should have an h3 tag', () => {
		const h3 = TestUtils.findRenderedDOMComponentWithTag(
			todoapp, 'h3'
		);
		expect( h3 ).toExist();
	});
	
	it( 'Should have a form tag', () => {
		const form = TestUtils.findRenderedDOMComponentWithTag(
			todoapp, 'form'
		);
		expect( form ).toExist();
	});

	it( 'Should have a TodoList tag', () => {
		const todoList = TestUtils.isCompositeComponent(
			todoapp, 'TodoList'
		);
		expect( todoList ).toExist();
	});
	
	it( 'Should have change and submit handlers defined', () => {
		expect( todoapp.handleChange ).toExist();
		expect( todoapp.handleSubmit ).toExist();
	});
	
});