import React, { useState } from "react";

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc){
            alert("Title or description cannot be empty");
        }
        else{
            console.log("Im here and desc is ", desc);
            addTodo(title, desc);
        }
    }
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control border border-secondary"
            id="title"
            value={title}
            aria-describedby="emailHelp"
            placeholder="Enter Todo"
            onChange={(e)=>{
                setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo description
          </label>
          <input
            type="text"
            className="form-control border border-secondary"
            id="desc"
            value={desc}
            placeholder="Enter description"
            onChange={(e)=>{
                setDesc(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
