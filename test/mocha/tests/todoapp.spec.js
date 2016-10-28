import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import TodoApp from '../../../src/js/TodoApp';

describe( '<TodoApp /> basic/shallow tests', () => {
	
	const wrapper = shallow( <TodoApp /> );
	
	it( 'Should be the same', () => {
		expect( 1 ).toEqual( 1 );
	});
	
	it( 'Renders the component', () =>{
		expect( wrapper ).toExist();
	});
			
	it( 'Should have an h3 tag', () => {
		expect( wrapper.find( 'h3' ).length ).toBe( 1 );
	});
	
	it( 'Should have a TodoList tag', () => {
		expect( wrapper.find( 'TodoList' ).length ).toBe( 1 );
	});

	it( 'Should have a form tag', () => {
		expect( wrapper.find( 'form' ).length ).toBe( 1 );
	});

	it( 'should have change and submit handlers defined', () => {
		expect( wrapper.handleChange ).toExist;
		expect( wrapper.handleSubmit ).toExist;
	});
});

describe( '<TodoApp /> mount tests', () => {

	it( 'Should call componentDidMount', () => {
		let spy = expect.spyOn( TodoApp.prototype, 'componentDidMount' );
		const wrapper = mount(<TodoApp />);
		expect( spy ).toHaveBeenCalled();
		spy.restore();
	});

	it( 'Should have a TodoList component', () => {
		const wrapper = mount( <TodoApp /> );
		expect( wrapper.find( 'TodoList' ).length ).toBe( 1 );
	});

	it( 'Should have an initial empty \'items\' state', () => {
		const wrapper = mount(<TodoApp />);
		expect( wrapper.state().items.length).toBe( 0 );
	});

	it( 'Should have an item in the item state', () => {
		const wrapper = mount(<TodoApp />);
		let item = { text: 'Test', id: Date.now() };
		wrapper.state().items.push( item );
		expect( wrapper.state().items.length).toBe( 1 );
	});
});