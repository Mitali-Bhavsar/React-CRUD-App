import React,{useState,useEffect} from 'react';
import axios from 'axios';

const AllServiceData = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        axios.get("https://ehealthcareserviceappdata.onrender.com/services")
        .then((res)=>{
            setService(res.data);
        })
        .catch((err)=>{
            console.log("Error");
        })
    })
  return (
    <div>
        <h3>All Services</h3>
        <table className='table'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>ICON</td>
                    <td>PRAGRAPH 1</td>
                    <td>PRAGRAPH 2</td>
                </tr>
            </thead>
            <tbody className='imgsize'>
               
                   {service.map((data)=>{
                    return (
                        <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td> <img src={data.icon} alt="" /></td>
                        <td><div className='parahide'>{data.para1}</div></td>
                        <td><div className='parahide'>{data.para2}</div></td>
                        </tr>
                    )
                   })}
               
            </tbody>
        </table>
    </div>
  )
}

export default AllServiceData;