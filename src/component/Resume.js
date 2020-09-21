import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import pdf from '../public/wlug.pdf';

const Resume = () =>{

  return(
    <div style={{overflow:"scroll"}}>
    <PDFViewer
      page="2"
      document={{ url:'https://images.kw.com/docs/2/1/2/212345/1285134779158_htwfaip.pdf',}}
     />
     </div>
  );
}

export default Resume;
