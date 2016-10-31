import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import App from '../../../src/js/components/App';

describe( '<App /> - Shallow tests', () => {
	
	const wrapper = shallow( <App /> );
	
	it( 'Shallow check of components structure', () => {
		expect( wrapper ).toExist( 'App component should exist' );
		expect( wrapper.find( '.todo-app' ).length ).toBe( 1 , 'Should be a div with class todo-app tag' );
		expect( wrapper.find( 'div' ).hasClass( 'todo-app' ) ).toBeTruthy( 'div should have class todo-app' );
	});
	
	it( 'Life cycle events', () => {
		expect( wrapper ).
	});
	
});

describe( ' mount tests', () => {
	
	const wrapper = mount( <App /> )
});