import React from 'react';

const ProjectItem = (props) =>{
  return(
    <div class="card mt-3 mr-3 bg-light border-white text-dark ">
      <div class="card-body">
        <h4 class="card-title bg-primary">{props.item.title}</h4>
        <p class="card-text text-left">{props.item.description}</p>
        <p class="card-text text-left"><b>Tech Stack :-</b>{props.item.techStack}</p>
        <p class="card-text text-left"><b>Github Link :-</b>{props.item.techStack}</p>
      </div>
    </div>
  );

}

export default ProjectItem;
