const React = require('react');

module.exports = React.createClass({

   displayName: 'TodoList',

   render: function(){
       return (
           <ul>
               { this.props.items.map( item => (
                   <li key={ item.id }>{ item.text }</li>
               ))}
           </ul>
       );
   }
});