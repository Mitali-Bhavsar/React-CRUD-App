import React from 'react';
import useHomeGetData from "./HomeGetData";
import { NavLink } from 'react-router-dom';

const Services = () => {
  const service = useHomeGetData("http://localhost:4000/services");
  return (
    <div>
      {/* <!--------services start--------->*/}
      <section className='allservice'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 p-5'>
              <h2>Services</h2>
              <div className='service'>
                {service.map((item) => {
                  return (
                    <div key={item.id} className='m-2 b-box'>
                      <NavLink to={`/allservicefile/${item.id}`}>
                      <img src={item.icon} alt=""  />
                      <p>{item.name}</p>
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