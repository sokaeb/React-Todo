import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: '',
        }
    }

    // this function will handle the input field being changed
    // it sets the item property to be the value of the input (what's typed in)
    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    };

    // this function will add each item being inputted 
    // it's using the addTodo funct from App.js and passing this.state.item as an argument
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addTodo(this.state.item)
    }

    // function for clearing the form after completing lives in App.js

    render(){
        return(
            <form className="form-input" onSubmit={this.handleSubmit}>  
                <input 
                    value ={this.state.item}
                    type='text'
                    placeholder='Enter ToDo'
                    onChange={this.handleChange}
                    name='item'
                />
                <button className="addTodo">Add Todo</button>
            </form>
        );
    };
};

export default TodoForm;