import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return(
        <div className="todo-list">
            {/* recieves the todos array and itereates over the list generating a new Todo for each element in the array */}
            {props.list.map((item) => (
                <Todo 
                    key={item.id}
                    item={item}
                    toggleDone={props.toggleDone}
                />
            ))}
        </div>
    );
};

export default TodoList;