import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// import testing suite
import { mount, shallow } from 'enzyme';
import expect from 'expect';

// import components
import App from '../../../../src/js/components/App';

// scaffold store
const mockStore = configureMockStore();

const store = mockStore( {
	todos: [],
	visibilityFilter: "SHOW_ALL"
} );

// setup functions
function setupShallow() {
	return shallow( <App /> );
}

function setupMount() {
	return mount(
		<Provider store={ store }>
			<App />
		</Provider>
	);
}

describe( '<App /> - Shallow tests', () => {
	
	it( 'Shallow check of components structure', () => {
		const wrapper = setupShallow();
		
		expect( wrapper ).toExist( 'Shallow app component should exist' );
		expect( wrapper.find( '.todo-app' ).length ).toBe( 1 , 'Should be a div with class todo-app tag' );
		expect( wrapper.find( 'div' ).hasClass( 'todo-app' ) ).toBeTruthy( 'div should have class todo-app' );
	});

});

describe( '<App /> - Mount tests', () => {
	
	it( 'Mount test of component', () => {
		const wrapper = setupMount();
		expect( wrapper ).toExist( 'Mounted app component should exist' );
	});
	
	
});
