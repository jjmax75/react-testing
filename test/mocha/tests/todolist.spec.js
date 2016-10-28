import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';

import TodoList from '../../../src/js/TodoList';

describe( '<TodoList /> basic/shallow tests', () => {
	const items = [];
	
	const wrapper = shallow( <TodoList items={items} /> );
	
	it( 'Should have props for items ', () => {
		expect(wrapper.props().items).toExist;
	});
});