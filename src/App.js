import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list : [{
        item: '',
        id: new Date (), // this gives each item a unique id 
        done: false,
      }],
    };
  }

  // this add/submit function will add a todo item to the array 
  // the function needs to create a new item, so it must 'set-up' a skeleton for where item will live
  addTodo = (todoItem) => {
    const newTodo = { // new item home and what 'rooms' it has
      item: todoItem,
      id: new Date(),
      done: false
    };
    // using the setState func to update the state with the newTodo item
    this.setState({
      list: [...this.state.list, newTodo]
    });
  };

  // this clear function will clear all todo items that have been switched to done

  // this toggle function will switch todo item to done
  toggleDone = (clickedItem) => {
    this.setState({
      list: this.state.list.map((listItem) => {
        if (listItem.id === clickedItem) {
          return {
            ...listItem,
            done: !listItem.done
          };
        } else {
          return listItem;
        };
      })
    });
  };

 
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} key={this.state.list.id} toggleDone={this.state.toggleDone} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
