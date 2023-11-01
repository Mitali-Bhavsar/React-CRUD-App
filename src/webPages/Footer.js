import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../Styles/style.css";
import useHomeGetData from "./HomeGetData";

const Footer = () => {
    const service = useHomeGetData("http://localhost:4000/services");
  return (
    <footer>
  <div id="topfooter">
      <div className="container">
          <div className="row">
              <div className="col-xl-3 pe-5">
                  <h6 className="my-4">EHealthCare</h6>
                  
                  <p>With deep healthcare knowledge, decades of marketing experience,
                     and a creative passion for excellence, we build thought leadership, 
                     increase patient connections, and generate revenue for hospitals.</p>
                   
              </div>
              <div className="col-xl-3">
                  <h6 className="my-4 text-start">Services</h6>
                 
                    <table>
                        <tbody>
                {service.map((item) => {
                  return (
                        <tr key={item.id} >
                        <td><NavLink to={`/allservicefile/${item.id}`}>{item.name}</NavLink></td>
                            </tr>
                  )
                })}
               </tbody>
                    </table>
              </div>
              <div className="col-xl-3">
                  <h6 className="my-4">Reach Us</h6>
                  <p className="mb-0 ">7545 Irvine Center Drive,</p>
                  <p className="mb-0">1st Floor Saffron House</p>
                 <p className="mb-0">6-10 Kirby Street</p>
                 <p className="mb-0">London EC1N 8TS</p>
                 <p className="mb-0">United Kingdom</p>
                  
              </div>
              <div className="col-xl-3 contact">
                  <h6 className="my-4">Contact Us</h6>
                  <p className="mb-0"><FontAwesomeIcon icon={faPhone} /><Link to="tel:+(800) 656-0907" className='ms-3'>+(800) 656-0907</Link></p>
                  <p><FontAwesomeIcon icon={faEnvelope} /><Link to="mailto:info@ehealthcare.com;" className='ms-3'>info@ehealthcare.com</Link></p>
                      
              </div>
          </div>
      </div>
  </div>
  <div id="bottomfooter">
      <div className="container pt-4">
          <div className="row">
              <div className="col-xl-4">
                  <p>&copy;Copyrights 2023 @ EHealthCare</p>
              </div>
              <div className="col-xl-4 text-end">
                  <p>Terms & Condition</p>
              </div>
              <div className="col-xl-4 text-end">
                  <p>Designed by :<span> Mitali Bhavsar.</span> </p>
              </div>
          </div>
      </div>
  </div>
  </footer>
  )
}

export default Footer