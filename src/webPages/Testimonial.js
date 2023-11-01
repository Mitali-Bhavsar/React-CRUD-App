import React from 'react';
import useHomeGetData from "./HomeGetData";

const Testimonial = () => {
  const testimonial = useHomeGetData("http://localhost:4000/testimonial");

  
  return (
    <section>
        <div className='container'>
          <div className='row'>
            <h2>Patient Testimonials</h2>
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