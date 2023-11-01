import React, { useState }  from 'react';
import axios from 'axios';

const AddOfferData = () => {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [offer,setOffer] = useState("");
   
const submitHandler = (e) =>{
    e.preventDefault();
axios.post("http://localhost:4000/offers",{id,name,offer})
.then((res)=>{
    alert("Data is added successfully.")
    setId("");
    setName("");
    setOffer("");
})
.catch((err)=>{
    alert("Data is not added.")
})
}
  return (
    <div>
         <h2>Add Offers</h2>
         <form onSubmit={submitHandler}>
            <div className='col-md-6 pb-3'>
                <input type='text' name='id' placeholder="ID" value={id} onChange={(e)=>setId(e.target.value)} className='form-control' />
            </div>
            <div className='col-md-6 pb-3'>
                <input type='text' name='name' placeholder="NAME" value={name} onChange={(e)=>setName(e.target.value)} className='form-control' />
            </div>
            <div className='col-md-6 pb-3'>
                <input  type='text' name='offer' placeholder="Offer" value={offer} onChange={(e)=>setOffer(e.target.value)} className='form-control' />
            </div>
            <div className='col-md-6 pb-3'>
                <input type='submit' className='btn btn-primary' />
            </div>
        </form>
    </div>
  )
}

export default AddOfferData