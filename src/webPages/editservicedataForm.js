import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditServiceDataForm = () => {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [icon,setIcon] = useState("");
    const [para1,setPara1] = useState('');
    const [para2,setPara2] = useState('');
    const {sno} = useParams();
    const navigate = useNavigate();
useEffect (()=>{
    axios.get(`https://ehealthcareserviceappdata.onrender.com/services/${sno}`)
    .then((res)=>{
        setId (res.data.id);
        setName (res.data.name);
        setIcon (res.data.icon); 
        setPara1(res.data.para1);
        setPara2(res.data.para2);
    })
    .catch((err)=>{
        console.log('Error')
    });
},[sno])
const updateData =(e)=>{
    e.preventDefault();
    axios.put(`https://ehealthcareserviceappdata.onrender.com/services/${id}`,{id,name,icon,para1,para2})
    .then((res)=>{
        alert('Data is updated Successfully.');
        navigate('/admindashboard/editservicedata')
    })
    .catch((err)=>{
        alert("error to update")
    });
}
  return (
    <div>
        <h2>Edit Data Of Service</h2>
        <form onSubmit={updateData}>
            <input type="text" name="id" value={id} onChange={(e)=>setId(e.target.value)} disabled   />
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" name="icon"  value={icon} onChange={(e)=>setIcon(e.target.value)} />
            <textarea type="text" name="para1" rows={10} cols={30} value={para1} onChange={(e)=>setPara1(e.target.value)} ></textarea>
            <textarea type="text" name="para2" rows={10} cols={30} value={para2} onChange={(e)=>setPara2(e.target.value)} ></textarea>
            <input type="submit" className='btn btn-primary' value="Update" />
        </form>
    </div>
  )
}

export default EditServiceDataForm;