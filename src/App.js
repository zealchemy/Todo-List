import React, { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from "./components/Todos";

class App extends Component {

  state = {
    
    todos: [
      {
        id: 1,
        title:'Take out the garbage',
        completed: false
      },
      {
        id: 2,
        title:'Dinner with myself',
        completed: false
      },
      {
        id: 3,
        title:'Meeting with boss',
        completed: false
      }
      
    ]
  }


  // delete todo item
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter( todo => todo.id !== id)]});
  }


  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })});
  }
  render() {
    return (
      <div className="App">
      <div className="className">

        <Header/>
        <AddTodo/>
        <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={ this.markComplete }/>   
      </div>
   
      </div>
    );
  }
}

export default App;
