import React,{useState,useEffect} from 'react';
import axios from 'axios';

const DeleteOfferData = () => {
    const[offer,setOffer] = useState([]);
    useEffect(()=>{
        axios.get("https://ehealthcareserviceappdata.onrender.com/offers")
        .then((res)=>{
            setOffer(res.data)
        })
        .catch((err)=>{
            console.log('data is unable to display')
        })
    })
    const deleteData =(sid) =>{
        axios.delete(`https://ehealthcareserviceappdata.onrender.com/offers/${sid}`)
        .then((ers)=>{
            alert("Data is deleted.")
        })
        .catch((err)=>{
            alert("Data is not deleted")
        })
    }
  return (
    <div>
        <h3>Delete Offers Data</h3>
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
               
            {offer.map((data)=>{
                    return (
                        <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.offer}</td>
                        <td><button onClick={()=>{deleteData(data.id)}} className='btn btn-primary'>Delete</button></td>
                        </tr>
                    )
                   })}
                       
                   
            </tbody>
        </table>
    </div>
  )
}

export default DeleteOfferData;