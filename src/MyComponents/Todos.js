import React from 'react'
import {TodoItem} from './TodoItem'
export const Todos = (props) => {
    const myStyle = {
        minHeight : "65vh",
        margin : "40px auto",
    }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-5'>Todos List</h3>
      {props.todos.length === 0 ? "No todos to display" : 
        props.todos.map((todo)=>{
            return (
            <TodoItem todo = {todo} key={todo.srno} onDelete = {props.onDelete}/>
            )
          })
        }
    </div>
  )
}

