import { useState } from 'react';
import './App.css';
import Guess  from './Guess';
const ori_nu=Math.floor(Math.random()*10)+1

function App() {
  
  console.log(ori_nu)
  const [term,setTerm]=useState("")
  const handleTerm=(e)=>{
    
      setTerm(e.target.value)
      

    
  }
  return (
    <>
    <div className="container">
      <div className='center'>
      <div className="term">
        <label htmlFor='num'>Guess a number between 1 to 10</label><br></br>
        <input id="num" type="text" name="num" onChange={handleTerm}></input>
      </div>
      <Guess term={term} ori_nu={ori_nu}/>
      </div>

      </div>
      <h2 style={{backgroundColor:"black",color:'beige',width:"1500px",padding:"20px",textAlign:"center",marginTop:"150px"}}>Developed By sabi</h2>
      </>
      
  )}
  

export default App;
