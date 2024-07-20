import React from 'react';
import './App.css';
import  {Button } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Cource';



function App() {
  
  return (

  
   <div>
    <ToastContainer/>
    <Home/>
     
    

    <Course 
      Course={{title:"Python course",description:"Python can be used on a server to create web applications"}}/>

<Course 
      Course={{title:"Java course",description:"Java is an object oriented programming language"}}/>

<Course 
      Course={{title:"ReactJs course",description:"ReactJs is a javaScript library for building user interface"}}/>

<Course 
      Course={{title:"Spring boot course",description:"Spring boot is an open source java framework"}}/>

      <Course 
      Course={{title:"Django course",description:"Django is free, open source and backend server side framework"}}/>

    
    
    
  </div>
  );
}

    export default App;
