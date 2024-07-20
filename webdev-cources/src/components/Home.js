import React from "react";
import { Container,Button, } from "reactstrap";



const Home=() =>{
    return(
       <Container className="text-center">
        <div class="container-fluid bg-light text-dark p-5">
        <div class="container bg-light p-5">
          <h1 class="display-7 fw-bold">Welcome to Course</h1>
          <p>This is developed by Learncode with Durgesh for learning purpose its backend is on spring boot and frontend on reactJs</p>
          
            
            <Button color="primary">Get Started</Button>
            
        </div>
      </div>
      </Container>
    )
};

export default Home;