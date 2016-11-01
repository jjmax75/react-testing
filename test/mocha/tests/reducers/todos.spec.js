// import testing suite
import expect from 'expect';

// import components
import todos from '../../../../src/js/reducers/todos';

describe( 'todos reducer', () => {
	it( 'Should handle an ADD_TODO', () =>{
		const todo = {
			type: 'ADD_TODO',
			text: 'Clean up after the dog'
		};
		
		const expectedReturn = [
			{
				text: 'Clean up after the dog',
				completed: false,
				id: undefined
			}
		];
		
		expect( todos( [], todo ) ).toEqual( expectedReturn );
		
	});
});