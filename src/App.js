import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos"

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
        completed: true
      },
      {
        id: 3,
        title:'Meeting with boss',
        completed: false
      }
      
    ]
  }

  markComplete = () => {
    console.log("Hello")
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={ this.markComplete }/>
        
      </div>
    );
  }
}

export default App;
