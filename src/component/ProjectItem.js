import React from 'react';

const ProjectItem = (props) =>{
  return(
    <div class="card mt-3 mr-3 bg-dark border-white text-light ">
      <div class="card-body">
        <h4 class="card-title">{props.item.title}</h4>
        <p class="card-text">{props.item.description}</p>
        <p class="card-text">Tech Stack :-{props.item.techStack}</p>
        <p class="card-text">Github Link :-{props.item.techStack}</p>
      </div>
    </div>
  );

}

export default ProjectItem;
