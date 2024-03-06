import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import img from "../Images/servicebannerimg.jpg";
import useHomeGetData from "./HomeGetData";

const AllServiceFile = () => {
  const { sno } = useParams();

  const testimonial = useHomeGetData("https://ehealthcareserviceappdata.onrender.com/testimonial");

  const [data, setData] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  axios.get(`https://ehealthcareserviceappdata.onrender.com/services/${sno}`)
    .then((res => {
      setData(res.data);
    }))
    .catch((err) => {
      console.log(err)
    })

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("https://ehealthcareserviceappdata.onrender.com/enquiry", { id,name, phone, email,subject, message })
      .then((res) => {
        alert("We Will Contact You Soon.Thank You.")
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSubject('');
      })
      .catch((err) => {
        alert(name);
        alert(phone);
        alert(email);
        console.log(err)
        alert("Unable to send Data.Please try again.")
      })
  }
 
  return (

    <div>
      <section className='mb-3'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 p-0'>
              <div >
                <img className='banner-img' src={img} alt="" />
              </div>

            </div>
          </div>
        </div>
      </section>
      <section >
        <div className='container'>
          <div className='row d-flex'>
            
              <div className='col-md-8'>
                <div>
                  <h2>{data.name}</h2>
                  <p>{data.para1}</p>
                  <p>{data.para2}</p>
                </div>
              </div>
              <div className='col-md-4 col-sm-12 quickform'>
                <form onSubmit={submitHandler} className='p-3' >
                  <div className='row mb-4'>
                    <h3 className='p-0'>Quick Enquiry</h3>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 mb-4">
                      <input type="text" className="form-control" name="id" placeholder="ID" required value={id} onChange={(e) => { setId(e.target.value) }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 mb-4">
                      <input type="text" className="form-control" name="name" placeholder="Name" required value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12  mb-4">
                      <input type="tel" className="form-control" name="phone" placeholder="Phone No." required value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    </div>
                  </div>

                  <div className="row ">

                    <div className="col-lg-12 mb-4">
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
                    <div className="col-lg-12 justify-content-center">
                      <button type='submit' className="btn btn-secondary btn-lg">Submit</button>
                    </div>
                  </div>
                </form>
            

            </div>
          </div>
        </div>
      </section>
      <section className='testimonial'>
      <h2 className='ps-3 ms-5'>Patient Testimonials</h2>
        <div className='container'>
          <div className='row'>
            {testimonial.slice(0, 3).map((item) => {
              return (
                <div key={item.id} className='testcomment'>
                   <div className='test'>
                   <p className='border-bottom'>{item.comment}</p>
                       <p className='text-end'>-{item.name}</p>
                   </div>
                       
                </div>
              )
            })}
           
             
            </div>
         
        </div>
      </section>

    </div>
  )
}

export default AllServiceFile;
