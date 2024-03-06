
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const BookService = () => {
 
  //get book service data start//
  const [bsId, setBsId] = useState([]);
  useEffect(()=>{
    
    axios.get('https://ehealthcareserviceappdata.onrender.com/bookService')
    .then((res)=>{
      setBsId(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
 
  //get book service data end//

  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [subject, setSubject] = useState([]);
  const [message, setMessage] = useState([]);
  
  const submitHandler =(e)=>{
    e.preventDefault();
    axios.post("https://ehealthcareserviceappdata.onrender.com/bookService",{id,name,phone,email,subject,message})
    .then((res)=>{
      alert("Service booked.");
      setId('');
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setSubject('');

    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <section>
       





      <div className='container'>
        <div className='row'>
        <div className='row '>
                    <h3 className='text-center'><span>Book Service</span></h3>
                  </div>
          <div className='col-md-12'>
          <div className='col-md-6 mb-4 form quickform'>
          <form onSubmit={submitHandler} className='p-4' >
                  
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <input type="text" className="form-control" name="id" placeholder="Id" required value={id} onChange={(e) => { setId(e.target.value) }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <input type="text" className="form-control" name="name" placeholder="Name" required value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12  mb-3">
                      <input type="tel" className="form-control" name="phone" placeholder="Phone No." required value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    </div>
                  </div>

                  <div className="row ">

                    <div className="col-lg-12 mb-3">
                      <input type="email" className="form-control" name="email" placeholder="Email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <textarea name="message" className="form-control" rows="4" placeholder="Message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 justify-content-center">
                      <button type='submit' className="btn btn-info btn-lg">Submit</button>
                    </div>
                  </div>
                </form>
          </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default BookService