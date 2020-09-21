import React from 'react';
import myphoto from '../public/logo2.png';

const Projects = () =>{
  return(
    <div >
      <div class="card" style={{width:"300px"}}>
        <img class="card-img-top" src={myphoto} alt="Card Image" />
        <div class="card-body">
          <h4 class="card-title">Project Name</h4>
          <p class="card-text">Project Discription</p>

        </div>
      </div>
    </div>
  );
}

export default Projects;
