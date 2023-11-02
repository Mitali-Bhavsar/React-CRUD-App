import axios from 'axios';
import React, { useState } from 'react'

const ContactUs = () => {
  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [subject, setSubject] = useState([]);
  const [message, setMessage] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("https://ehealthcareserviceappdata.onrender.com/contactus", { id, name, phone, email, subject, message })
      .then((res) => {
        alert("We will contact you soon.Thank you.")
        setId('');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setSubject('');
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div>
    <section>
      <div className='container'>
       
        <div className='row mb-4 d-inline'>
                  <h3>Contact Us</h3>
                </div>
                <div className='row d-flex'>
         
          
            <div className='col-md-8 mb-4'>
              <form onSubmit={submitHandler} className='p-4 col-sm-12 quickform' >
               
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input type="text" className="form-control" name="id" placeholder="Id" required value={id} onChange={(e) => { setId(e.target.value) }} />
                  </div>

                  <div className="col-lg-6 mb-4">
                    <input type="text" className="form-control" name="name" placeholder="Name" required value={name} onChange={(e) => { setName(e.target.value) }} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6  mb-4">
                    <input type="tel" className="form-control" name="phone" placeholder="Phone No." required value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                  </div>


                  <div className="col-lg-6 mb-4">
                    <input type="email" className="form-control" name="email" placeholder="Email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <textarea name="message" className="form-control" rows="4" placeholder="Message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-7 justify-content-center">
                    <button type='submit' className="btn btn-secondary btn-lg">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-md-4 f-style'>
              <h6 className="my-4">Reach Us</h6>
              <p className="mb-0 ">7545 Irvine Center Drive,</p>
              <p className="mb-0">1st Floor Saffron House</p>
              <p className="mb-0">6-10 Kirby Street</p>
              <p className="mb-0">London EC1N 8TS</p>
              <p className="mb-0">United Kingdom</p>
            </div>
          
        </div>
      </div>

    </section>
    {/*<!---map start-->*/}
<section className="pt-0 pb-2">
    <div className="container-fluid px-0">
        
            <div className="col-lg-12">
            <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121813.24014299481!2d78.3716641813469!3d17.42791695522511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91065c1d3e53%3A0x2d84d6e311a69e21!2sHyderabad%20IT%20Trainings!5e0!3m2!1sen!2sin!4v1637834062372!5m2!1sen!2sin" allowfullscreen="" loading="lazy" className='map'></iframe>
            </div>
     
    </div>
</section>
 {/*<!---map end-->*/}
    </div>
  )
}

export default ContactUs