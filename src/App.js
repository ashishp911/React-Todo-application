import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header.js";
import { Todos } from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About"
import React, { useState, useEffect } from "react";

import {
  createBrowserRouter as Router,
  RouterProvider,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // console.log("I am Ondelete of ", todo)
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let srno;
    if (todos.length == 0) {
      srno = 0;
    } else {
      srno = todos[todos.length - 1].srno + 1;
    }

    const mytodo = {
      srno: srno,
      title: title,
      description: desc,
    };
    console.log(mytodo);
    setTodos([...todos, mytodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="MyTodosList" searchBar={true} />
        <Switch>
          <Route exact path="/" render = {() => {
            return(
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
