const React = require( 'react' );

const TodoList = require('./TodoList');

module.exports = React.createClass({

    displayName: 'TodoApp',

    getInitialState: function() {
        return {
            items: [],
            text: ''
        }
    },

    handleChange: function(e) {
        this.setState( { text: e.target.value } );
    },

    handleSubmit: function(e) {
        e.preventDefault();
        let newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState( (prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    },
    
    componentDidMount: function() {},

    render: function (){
        return (
            <div className="todo-app">
                <h3>TODO</h3>
                <TodoList items={ this.state.items } />
                <form onSubmit={ this.handleSubmit }>
                    <input onChange={ this.handleChange } value={ this.state.text } />
                    <button>{ 'Add #' + ( this.state.items.length + 1 ) }</button>
                </form>
            </div>
        );
    }
});