import React from 'react';
import useHomeGetData from "./HomeGetData";

const Testimonial = () => {
  const testimonial = useHomeGetData("https://ehealthcareserviceappdata.onrender.com/testimonial");

  
  return (
    <section>
        <div className='container'>
          <div className='row'>
            <h3>Patient<span> Testimonials</span></h3>
            {testimonial.map((item) => {
              return (

                <div key={item.id} className='border-bottom'>
                  <p className='text-start'>{item.comment}</p>
                  <p className='text-end'>-{item.name}</p>
                </div>

              )
            })}
          </div>
        </div>
      </section>
  )
}

export default Testimonial