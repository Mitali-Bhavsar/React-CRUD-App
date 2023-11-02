import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom'

const EditTestimonialData = () => {
    const [testimonial,setTestimonial] = useState([]);
    useEffect(()=>{
        axios.get("https://ehealthcareserviceappdata.onrender.com/testimonial")
        .then((res)=>{
            setTestimonial(res.data)
        })
        .catch((err)=>{
            console.log('dada is not displayed.')
        })
})
  return (
    <div>
         <h3>Edit Testimonial data</h3>
        <table>
            <thead>
                <tr>
                <td>ID</td>
                    <td>NAME</td>
                    <td>COMMENT</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    testimonial.map((data)=>{
                        return(
                            <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.comment}</td>
                             <td><NavLink to={`/edittestimonialdataForm/${data.id}`}><button className='btn btn-primary'>Edit</button></NavLink></td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default EditTestimonialData;