import React from 'react';
import bimg from '../Images/bannerImage.png';
import useHomeGetData from "./HomeGetData";
import "../JS/main.js";
import Marquee from "react-fast-marquee";

const AboutUs = () => {
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
                       
                       <Marquee scrollamount="7" direction="left">
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
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2>About Us</h2>
              <p>EHealthcare partners with hospital leadership, CEOs, marketing executives, and key physicians to develop robust marketing strategies. From planning and execution to tracking and optimizing,
                we create marketing that generates awareness, builds brands, and ethically attracts (and retains) high reimbursing service-line cases. Our team has deep expertise in marketing virtually every high-priority
                hospital service line, including oncology, orthopaedic surgery, primary care, urgent care, emergency department, bariatric surgery, obstetrics, fertility, cardiology, otolaryngology, and many more.</p>
              <p>Whether you want to differentiate your hospital or health system from your competitors, build a highly recognizable brand, bring in new patients, educate your community, or implement an integrated marketing strategy,
                our hospital SEO marketing agency delivers unique solutions that elevate your brand and meet your unique organizational needs.
                We support in-house marketing teams with specialized expertise or partner with leadership and key stakeholders to develop high-value, data-driven marketing strategies.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h3>Mission</h3>
              <p>To provide patient-centered healthcare with excellence in quality, service, and access.</p>
              <h3>Vision</h3>
              <p>A community in which all people achieve their full potential for health and well-being across the lifespan.  We work to be trusted by patients,
                a valued partner in the community, and creators of positive change.</p>
              <h3>Why Choose Us</h3>
              <ul className='text-start'>
                <li><h6>Emergency</h6></li>
                <li><h6>Perioperative Care</h6></li>
                <li><h6>Latest Technology</h6></li>
                <li><h6>Competitive Price</h6></li>
                <li><h6>Quality Standards</h6></li>
                <li><h6>Specialized Doctors</h6></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs