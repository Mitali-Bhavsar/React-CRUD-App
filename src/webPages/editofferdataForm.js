import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditOfferDataForm = () => {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [offer,setOffer] = useState("");
    const {sno} = useParams();
    const navigate = useNavigate();
useEffect (()=>{
    axios.get(`http://localhost:4000/offers/${sno}`)
    .then((res)=>{
        setId (res.data.id);
        setName (res.data.name);
        setOffer(res.data.offer);
    })
    .catch((err)=>{
        console.log('Error')
    });
},[sno])
const updateData =(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:4000/offers/${id}`,{id,name,offer})
    .then((res)=>{
        alert('Data is updated Successfully.');
        navigate('/admindashboard/editofferdata')
    })
    .catch((err)=>{
        alert("error to update")
    });
}
  return (
    <div>
        <h2>Edit Data Of Offers</h2>
        <form onSubmit={updateData}>
            <input type="text" name="id" value={id} onChange={(e)=>setId(e.target.value)} disabled />
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" name="offer"  value={offer} onChange={(e)=>setOffer(e.target.value)} />
            <input type="submit" className='btn btn-primary' value="Update" />
        </form>
    </div>
  )
}

export default EditOfferDataForm;