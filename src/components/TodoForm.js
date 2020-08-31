import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: '',
        }
    }

    // this function will handle the input field being changed
    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    }

    render(){
        return(
            <form className="form-input" onSubmit={}>  
                <input 
                    value =
                    type='text'
                    placeholder='Enter ToDo'
                    onChange={handleChange}
                />
                <button className="addTodo">{}</button>
                <button className="clearAllTodo">{}</button>
            </form>
        );
    }
}