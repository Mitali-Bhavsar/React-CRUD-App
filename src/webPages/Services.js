import React from 'react';
import useHomeGetData from "./HomeGetData";
import { NavLink } from 'react-router-dom';

const Services = () => {
  const service = useHomeGetData("https://ehealthcareserviceappdata.onrender.com/services");
  return (
    <div>
      {/* <!--------services start--------->*/}
      <section className='allservice'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 py-5'>
              <h2 className='text-center'><span>Services</span></h2>
              <div className='service'>
                {service.map((item) => {
                  return (
                    <div key={item.id} className='m-2 b-box'>
                      <NavLink to={`/allservicefile/${item.id}`}>
                      <div className='zoomimg'>
                      <img src={item.icon} alt=""  />
                      <p>{item.name}</p>
                      </div>
                      </NavLink>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--------services end--------->*/}
    </div>
  )
}

export default Services