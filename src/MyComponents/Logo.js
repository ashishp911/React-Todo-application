import React from 'react'
import todo from "../Images/todo.png"

const Logo = () => {
    const mystyle = {
        height : "170px",
        width : "120px",
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
    };
  return (
    <div className='container mt-3'>
      <img src={todo} alt="No logo found" style={mystyle}/>
    </div>
  )
}

export default Logo
