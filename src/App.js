import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header.js';
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'

function App() {
  const todos = [
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
      srno:1,
      title:"Go to the School",
      description: "You need to go to the school to get this job done."
    },
  ]
  return (
    <>
    <Header title = "MyTodosList" searchBar = {true}/>
    <Todos todos = {todos}/>
    <Footer/>
    </>
  );
}

export default App;
