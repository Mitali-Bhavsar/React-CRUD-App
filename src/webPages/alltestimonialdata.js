import React,{useState,useEffect} from 'react';
import axios from 'axios';

const AllTestimonialData = () => {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(()=>{
        axios.get("https://ehealthcareserviceappdata.onrender.com/testimonial")
        .then((res)=>{
            setTestimonial(res.data);
        })
        .catch((err)=>{
            console.log("Error");
        })
    })
  return (
    <div>
        <h3>All Testimonials</h3>
        <table className='table'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>COMMENTS</td>
                    
                </tr>
            </thead>
            <tbody>
               
                   {testimonial.map((data)=>{
                    return (
                        <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.comment}</td>
                       </tr>
                    )
                   })}
               
            </tbody>
        </table>
    </div>
  )
}

export default AllTestimonialData;