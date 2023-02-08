import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header.js';
import {Todos} from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import AddTodo from './MyComponents/AddTodo'
import React, { useState } from 'react';

function App() {
  
  const onDelete = (todo) => {
    // console.log("I am Ondelete of ", todo)
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }
  
  const [todos, setTodos] = useState([
    {
      srno:1,
      title:"Go to the market",
      description: "You need to go to the market to get this job done."
    },
    {
      srno:2,
      title:"Go to the Mall",
      description: "You need to go to the mall to get this job done."
    },
    {
      srno:3,
      title:"Go to the School",
      description: "You need to go to the school to get this job done."
    },
  ]);

  return (
    <>
    <Header title = "MyTodosList" searchBar = {true}/>
    <AddTodo/>
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
