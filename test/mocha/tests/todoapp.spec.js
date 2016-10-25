import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import TodoApp from '../../../src/js/TodoApp';

describe( '<TodoApp /> basic/shallow tests', () => {
	
	const wrapper = shallow( <TodoApp /> );
	
	it( 'Should have an h3 tag', () => {
		expect( wrapper.find( 'h3' ) ).to.have.length( 1 );
	});
	
	it( 'Should have a TodoList tag', () => {
		expect( wrapper.find( 'TodoList' ) ).to.have.length( 1 );
	});
	
	it( 'Should have a form tag', () => {
		expect( wrapper.find( 'form' ) ).to.have.length( 1 );
	});
	
	it( 'should have change and submit handlers defined', () => {
		expect( wrapper.handleChange ).to.be.defined;
		expect( wrapper.handleSubmit ).to.be.defined;
	});
});

describe( '<TodoApp /> mount tests', () => {
	
	it( 'Should call componentDidMount', () => {
		let spy = sinon.spy( TodoApp.prototype, 'componentDidMount' );
		const wrapper = mount(<TodoApp />);
		expect( TodoApp.prototype.componentDidMount.calledOnce ).to.equal( true );
		spy.restore();
	});
	
	it( 'Should have a TodoList component', () => {
		const wrapper = mount( <TodoApp /> );
		expect( wrapper.find( 'TodoList' ) ).to.have.length( 1 );
	});
	
	it( 'Should have an initial empty \'items\' state', () => {
		const wrapper = mount(<TodoApp />);
		expect( wrapper.state().items.length).to.equal( 0 );
	});
	
	it( 'Should have an item in the item state', () => {
		const wrapper = mount(<TodoApp />);
		let item = { text: 'Test', id: Date.now() };
		wrapper.state().items.push( item );
		expect( wrapper.state().items.length).to.equal( 1 );
	});
	
	it( 'Should register a click on the add button', () => {
		const handleSubmit = sinon.spy();
		const wrapper = mount( <TodoApp /> );
		wrapper.find( 'button' ).simulate( 'click' );
		expect(handleSubmit.calledOnce).to.equal( true );
	});

});

