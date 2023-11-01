import React,{useState,useEffect} from 'react';
import axios from 'axios';

const AllOfferData = () => {
    const [offer, setOffer] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/offers")
        .then((res)=>{
            setOffer(res.data);
        })
        .catch((err)=>{
            console.log("Error");
        })
    })
  return (
    <div>
        <h3>All Offers</h3>
        <table className='table'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>OFFERS</td>
                    
                </tr>
            </thead>
            <tbody>
               
                   {offer.map((data)=>{
                    return (
                        <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.offer}</td>
                       </tr>
                    )
                   })}
               
            </tbody>
        </table>
    </div>
  )
}

export default AllOfferData;