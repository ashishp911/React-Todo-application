import React from 'react'

export const TodoItem = (props) => {
  return (
    <div className='row'>
        <div className='col-2'> <h4>{"→"}</h4> </div>
        <div className='col-4'> <h4>{props.todo.title}</h4> </div>
        <div className='col-5'><h5>{props.todo.description}</h5></div>
        <div className='col-1'> 
            <button className="btn btn-sm btn-danger" onClick={()=>{
                props.onDelete(props.todo)
        }}>Delete</button></div>
        </div>
  )
}


