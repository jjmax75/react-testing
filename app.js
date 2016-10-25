const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const TodoApp = require( './src/js/TodoApp' );

ReactDOM.render(
	<TodoApp />,
	document.getElementById( 'app' )
);
