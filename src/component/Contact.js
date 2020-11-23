import React,{useState} from 'react';

var Contact = ()=>{

  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  var onSubmitHandler = (event) =>{
    event.preventDefault();
    console.log("Success");
    setEmail("");
    setMessage("");
  }

  return(
    <div>
      <div class="container-fluid rounded shadow-lg px-3 py-4 mt-5 bg-white"
           style={{width:"60%"}}>

        <label class="h3 contact-label text-dark mb-5"> Contact Me!</label>
        <form
          class="needs-validation"
          onSubmit={onSubmitHandler}>

          <div class="form-group mb-4">
            <label class="h5 contact-label text-dark"> Email:</label>
            <input
              class="form-control"
              type="text"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value) } />
          </div>

          <div class="form-group mb-4">
            <label class="h5 contact-label text-dark"> Message:</label>
            <input
              class="form-control"
              type="textarea"
              value={message}
              onChange={(event) => setMessage(event.target.value) } />
          </div>
          <div class="form-group text-center">
            <button
              type="submit"
              class="btn btn-outline-success rounded-pill shadow"
              style={{width: "25%"}}
              >

              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
