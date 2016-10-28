import React from  'react';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

module.exports = React.createClass({

    displayName: 'App',
        
    componentDidMount: function() {},

    render: function() {
        return (
            <div className="todo-app">
                <h3>TODOs</h3>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
});