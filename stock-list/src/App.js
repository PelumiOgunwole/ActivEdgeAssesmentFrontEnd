
import './App.css';
import axios from 'axios';

import { useEffect, useState } from 'react';


function App() {
  const [table, setTable]= useState([])
   function getUser(){
    try{

      const response =  axios("http://localhost:9090/api/stocks").then((res)=>{
        
        setTable(res.data.payload)
        // console.log("wally",res.data.payload.name)
        
      })
 
    

    }catch(error){
      console.log( "wiliiam",error)
    }
  
  }
  console.log("wally33333",table[0])
  table.map((item, index)=>{
console.log(item.name)
  })

  useEffect(()=>{
   getUser()
  }, [])
  return (

    
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>


      </head>
    
        <h1>List of Stocks</h1>
        <div></div>
 

      <table class="table">
        <thead className='thead-dark'>
          <tr>
            <th  scope="col">S/N</th>
            <th  scope="col">Name</th>
            <th  scope="col">Current Price</th>
            <th  scope="col">Create Date</th>
            <th  scope="col">Updated Date</th>
          </tr>
        </thead>

        {table &&  table.length>0? (
          table.map((item, index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.currentPrice}</td>
              
              <td>{item.createDate}</td>
              <td>{item.lastUpdate}</td>
            </tr>
          )
           
          )
       
        ): ""}
      <tbody>
        <tr> 
       
           </tr>
      </tbody>
      </table>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
