import React, { useState }  from 'react';
import axios from 'axios';

const AddTestimonialData = () => {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [comment,setComment] = useState("");
   
const submitHandler = (e) =>{
    e.preventDefault();
axios.post("http://localhost:4000/testimonial",{id,name,comment})
.then((res)=>{
    alert("Data is added successfully.")
    setId("");
    setName("");
    setComment("");
})
.catch((err)=>{
    alert("Data is not added.")
})
}
  return (
    <div>
         <h2>Add Testimonial</h2>
         <form onSubmit={submitHandler}>
            <div className='col-md-6 pb-3'>
                <input type='text' name='id' placeholder="ID" value={id} onChange={(e)=>setId(e.target.value)} className='form-control' />
            </div>
            <div className='col-md-6 pb-3'>
                <input type='text' name='name' placeholder="NAME" value={name} onChange={(e)=>setName(e.target.value)} className='form-control' />
            </div>
            <div className='col-md-6 pb-3'>
                <textarea  type='text' name='comment' placeholder="COMMENT" value={comment} onChange={(e)=>setComment(e.target.value)} className='form-control'></textarea>
            </div>
            <div className='col-md-6 pb-3'>
                <input type='submit' className='btn btn-primary' />
            </div>
        </form>
    </div>
  )
}

export default AddTestimonialData