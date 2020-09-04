import React from 'react';
import './css/home.css';
import myphoto from '../public/logo2.png'

const Home = () =>{
  return(
    <div class="row">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div class="col-sm-7" >
        <div class="container text-left" style={{marginLeft:"190px", marginTop:"150px"}}>
          <h1 class="text-light font-weight-bold"> Hello, I'm</h1>
          <h1 class="text-light font-weight-bold"> Shubham Rampurkar</h1>
          <p class="text-light">Final year B.Tech Student from Walchand College of Engineering,Sangli</p>
          <p class="text-light">I'm skilled in Android, React, NodeJS, Git, Docker.</p>
          <p class="text-light">Passionate about Web Development and Open Source Contributions.</p>
          <p class="text-light">Check out My Projects and Resume.</p>
        </div>
      </div>
      <div class="col-sm-5" >
        <div class="card mr-5 mt-4 bg-dark" style={{width:"400px"}}>
          <img class="card-img-top p-4" src={myphoto} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title text-light">Shubham Rampurkar</h4>
            <p class="card-text text-warning">Software Developer</p>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-github"></a>
            <a href="#" class="fa fa-instagram"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
