import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

  getStyle = () => {
    return{
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration:  this.props.todo.completed ? 'line-through' : 'none'
    }
}

  render() {

    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
        { title }
        <button href="#" onClick={this.props.delTodo.bind(this, id)} style={btnStyle} ><i className="fas fa-trash-alt"></i></button>
        </p>
        
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
  }

const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '20%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
