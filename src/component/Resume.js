import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import pdf from '../public/wlug.pdf';

const Resume = () =>{

  return(
    <div class="mt-3"style={{"overflow-y":"scroll" ,"height":"600px"}}>
    <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            }}

            hideNavbar="false"
        />
     </div>
  );
}

export default Resume;
