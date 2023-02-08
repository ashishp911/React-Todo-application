import React from "react";

const addTodo = () => {
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control border border-secondary"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter Todo"
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
            placeholder="Enter description"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default addTodo;
