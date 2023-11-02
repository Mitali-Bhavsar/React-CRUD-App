import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditTestimonialDataForm = () => {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [comment,setComment] = useState("");
    const {sno} = useParams();
    const navigate = useNavigate();
useEffect (()=>{
    axios.get(`https://ehealthcareserviceappdata.onrender.com/testimonial/${sno}`)
    .then((res)=>{
        setId (res.data.id);
        setName (res.data.name);
        setComment(res.data.comment);
    })
    .catch((err)=>{
        console.log('Error')
    });
},[sno])
const updateData =(e)=>{
    e.preventDefault();
    axios.put(`https://ehealthcareserviceappdata.onrender.com/testimonial/${id}`,{id,name,comment})
    .then((res)=>{
        alert('Data is updated Successfully.');
        navigate('/admindashboard/edittestimonialdata')
    })
    .catch((err)=>{
        alert("error to update")
    });
}
  return (
    <div>
        <h2>Edit Data Of Testimonial</h2>
        <form onSubmit={updateData}>
            <input type="text" name="id" value={id} onChange={(e)=>setId(e.target.value)} disabled />
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
            <textarea type="text" name="comment" rows={8} cols={50}  value={comment} onChange={(e)=>setComment(e.target.value)} ></textarea>
            <input type="submit" className='btn btn-primary' value="Update" />
        </form>
    </div>
  )
}

export default EditTestimonialDataForm;