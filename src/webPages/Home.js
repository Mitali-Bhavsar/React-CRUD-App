import React from 'react';
import bimg from '../Images/bannerImage.png';
import img1 from '../Images/Image1.png';
import img2 from '../Images/Image2.png';
import useHomeGetData from "./HomeGetData";
import { NavLink } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const Home = () => {
  const testimonial = useHomeGetData("https://ehealthcareserviceappdata.onrender.com/testimonial");
  const service = useHomeGetData("https://ehealthcareserviceappdata.onrender.com/services");
  const offers = useHomeGetData("https://ehealthcareserviceappdata.onrender.com/offers");


  return (
    <div>
      {/*<!--------background images start--------->*/}
      <section id="BannerImage">
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 p-0'>
              <figure>
                <img src={bimg} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/*<!--------background images end--------->*/}
      {/*<!--------marquee start--------->*/}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0 d-flex">
           
              {offers.map((item) => {
                  return (
                    <div className="marquee" key={item.id}>
                       
                       <Marquee  scrollamount="7" direction="left">
                    <p className=''>{item.name}{item.offer}</p>
                    </Marquee>
                 </div>
                
                  )
                })}
                
            </div>
          </div>
        </div>
      </section>
      {/* <!--------marquee end--------->*/}
      {/* <!--------services start--------->*/}
      <section className='allservice'>
        <div className='container-fluid'>
          <div className='row'>
           
              <div className='service'>
                {service.map((item) => {
                  return (
                    <div key={item.id} className='m-2 b-box'>
                      
                      <NavLink to={`/allservicefile/${item.id}`}>
                      <div className='zoomimg'>
                      <img src={item.icon} alt="" />
                      <p className='text-center'>{item.name}</p>
                      </div>
                      </NavLink>
                      
                    </div>
                    
                  )
                })}
              </div>
            
          </div>
        </div>
      </section>
      {/* <!--------services end--------->*/}
      {/* <!--------welcome start--------->*/}
      <section className='welcome p-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <figure>
                <img src={img1} alt="" />
              </figure>
            </div>
            <div className='col-md-8'>
              <h3>Welcome to<span> EHealthCare</span></h3>
              <p>Our hospital digital marketing agency consultants have spent decades developing
                unique, data-driven, and proven programs to help hospitals and other medical organizations
                overcome marketing obstacles, anticipate and respond to hospital marketing trends, and
                exceed business objectives.Healthcare Success partners with hospital leadership, CEOs,
                marketing executives, and key physicians to develop robust marketing strategies. From planning
                and execution to tracking and optimizing, we create marketing that generates awareness, builds
                brands, and ethically attracts (and retains) high reimbursing service-line cases. Our team has
                deep expertise in marketing virtually every high-priority hospital service line, including oncology,
                orthopaedic surgery, primary care, urgent care, emergency department, bariatric surgery, obstetrics,
                fertility, cardiology, otolaryngology, and many more.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--------welcome end--------->*/}
      {/* <!--------overlay start--------->*/}
      <section className='overlay'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 p-0'>
              <figure>
                <img src={img2} alt="" />
              </figure>
              <h1 className="animate-charcter"> 20% Offer On First Booking</h1>
            </div>
          </div>
        </div>
      </section>
      {/* <!--------overlay end--------->*/}
      {/*--------testimonials start---------*/}
      <section>
        <div className='container'>
          <div className='row'>
            <h3 className='pt-0'>Patient<span> Testimonials</span></h3>
            {testimonial.slice(0, 3).map((item) => {
              return (

                <div key={item.id} className='border-bottom'>
                  <p className='text-start'>{item.comment}</p>
                  <p className='text-end'>-{item.name}</p>
                </div>

              )
            })}
           <div className='col-md-2 p-2'>
           <NavLink to ="/testimonial" className='btn btn-info'>Read More</NavLink>
           </div>
          </div>
        </div>
      </section>
      {/*--------testimonials end---------*/}
    </div>
  )
}

export default Home