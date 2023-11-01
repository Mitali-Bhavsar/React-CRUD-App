import React,{useState,useEffect} from 'react';
import axios from 'axios';

const AllContactData = () => {
    const [contact, setContact] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/contactus")
        .then((res)=>{
            setContact(res.data);
        })
        .catch((err)=>{
            console.log("Error");
        })
    })
  return (
    <div>
        <h3>All Contact Detail</h3>
        <table className='table'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>PHONE NO.</td>
                    <td>EMAIL</td>
                    <td>SUBJECT</td>
                    <td>MESSAGE</td>
                </tr>
            </thead>
            <tbody>
               
                   {contact.map((data)=>{
                    return (
                        <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                        <td>{data.subject}</td>
                        <td>{data.message}</td>
                        </tr>
                    )
                   })}
               
            </tbody>
        </table>
    </div>
  )
}

export default AllContactData;