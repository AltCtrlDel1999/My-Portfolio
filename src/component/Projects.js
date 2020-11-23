import React from 'react';
import myphoto from '../public/logo2.png';
import ProjectItem from './ProjectItem';
const Projects = () =>{
  var projects = [
    {
      title:"PaperDApp",
      description:"PaperDApp is a Blockchain based Paperless office web application which can be used by organizations for digital document management.",
      techStack:"Ethereum, IPFS, React"
    },
    {
      title:"PaperDApp",
      description:"PaperDApp is a Blockchain based Paperless office web application which can be used by organizations for digital document management.",
      techStack:"Ethereum, IPFS, React"
    },
    {
      title:'PaperDApp',
      description:'PaperDApp is a Blockchain based Paperless office web application which can be used by organizations for digital document management.',
      techStack:"Ethereum, IPFS, React"
    }

  ];

  return(
    <div class="row overflow-auto" style={{"overflow-y":"scroll","height":"600px"}}>
      <div class="col-sm-3"></div>
      <div class="col-sm-9 " >
      {projects.map((item) =>
        <ProjectItem key={item.id} item={item} />
      )}
      </div>
    </div>
  );
}

export default Projects;
