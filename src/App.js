import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header.js';
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'

function App() {
  return (
    <>
    <Header title = "MyTodosList" searchBar = {true}/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;
