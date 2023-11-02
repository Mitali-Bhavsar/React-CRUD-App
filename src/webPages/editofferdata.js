import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom'

const EditOfferData = () => {
    const [offer,setOffer] = useState([]);
    useEffect(()=>{
        axios.get("https://ehealthcareserviceappdata.onrender.com/offers")
        .then((res)=>{
            setOffer(res.data)
        })
        .catch((err)=>{
            console.log('dada is not displayed.')
        })
})
  return (
    <div>
         <h3>Edit Offer data</h3>
        <table>
            <thead>
                <tr>
                <td>ID</td>
                    <td>NAME</td>
                    <td>OFFER</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    offer.map((data)=>{
                        return(
                            <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.offer}</td>
                             <td><NavLink to={`/editofferdataForm/${data.id}`}><button className='btn btn-primary'>Edit</button></NavLink></td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default EditOfferData;