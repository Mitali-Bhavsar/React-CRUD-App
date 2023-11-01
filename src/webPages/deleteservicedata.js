import React,{useState,useEffect} from 'react';
import axios from 'axios';

const DeleteServiceData = () => {
    const[service,setService] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/services")
        .then((res)=>{
            setService(res.data)
        })
        .catch((err)=>{
            console.log('data is unable to display')
        })
    })
    const deleteData =(sid) =>{
        axios.delete(`http://localhost:4000/services/${sid}`)
        .then((ers)=>{
            alert("Data is deleted.")
        })
        .catch((err)=>{
            alert("Data is not deleted")
        })
    }
  return (
    <div>
        <h3>Delete Service Data</h3>
        <table>
            <thead>
                <tr>
                <td>ID</td>
                    <td>NAME</td>
                    <td>ICON</td>
                    <td>PRAGRAPH 1</td>
                    <td>PRAGRAPH 2</td>
                    <td></td>
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
                        <td><button onClick={()=>{deleteData(data.id)}} className='btn btn-primary'>Delete</button></td>
                        </tr>
                    )
                   })}
                       
                   
            </tbody>
        </table>
    </div>
  )
}

export default DeleteServiceData;