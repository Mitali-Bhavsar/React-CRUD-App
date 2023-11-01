import React, { useState } from 'react';
import axios from 'axios';


const AddServiceData = () => {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [icon,setIcon] = useState("");
    const [para1,setPara1] = useState('');
    const [para2,setPara2] = useState('');
const submitHandler = (e) =>{
    e.preventDefault();
axios.post("http://localhost:4000/services",{id,name,icon,para1,para2})
.then((res)=>{
    alert("Data is added successfully.")
    setId("");
    setName("");
    setIcon("");
    setPara1("");
    setPara2("");
})
.catch((err)=>{
    alert("Data is not added.")
})
}
  return (
    <div>
         <h2>Add service</h2>
         <form onSubmit={submitHandler}>
            <div className='col-md-6 pb-3'>
                <input type='text' name='id' placeholder="ID" value={id} onChange={(e)=>setId(e.target.value)} className='form-control' />
            </div>
            <div className='col-md-6 pb-3'>
                <input type='text' name='name' placeholder="NAME" value={name} onChange={(e)=>setName(e.target.value)} className='form-control' />
            </div>
            <div className='col-md-6 pb-3'>
                <input  type='file' name='icon' placeholder="Icon Image" value={icon} onChange={(e)=>setIcon(e.target.value)} className='form-control' />
            </div>
            <div className='col-md-6 pb-3'>
                <textarea type='text' name='para1' placeholder="Paragraph 1" value={para1} onChange={(e)=>setPara1(e.target.value)} className='form-control'></textarea>
            </div>
            <div className='col-md-6 pb-3'>
                <textarea type='text' name='para2' placeholder="Paragraph 2" value={para2} onChange={(e)=>setPara2(e.target.value)} className='form-control'></textarea>
            </div>
            <div className='col-md-6 pb-3'>
                <input type='submit' className='btn btn-primary' />
            </div>
        </form>
    </div>
  )
}
export default AddServiceData