import React from 'react';
import myphoto from '../public/logo2.png'

const Home = () =>{
  return(
    <div class="row">
      <div class="col-sm-7" >
        <div class="container text-left" style={{marginLeft:"190px", marginTop:"150px"}}>
          <h1 class="text-light font-weight-bold"> Hello, I'm</h1>
          <h1 class="text-light font-weight-bold"> Shubham Rampurkar</h1>
        </div>
      </div>
      <div class="col-sm-5" >
        <div class="card mr-5 mt-5 bg-dark" style={{width:"400px"}}>
          <img class="card-img-top p-4" src={myphoto} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title text-light">Shubham Rampurkar</h4>
            <p class="card-text text-warning">Software Developer</p>
            <a href="#" class="btn btn-outline-success text-light">See My Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
