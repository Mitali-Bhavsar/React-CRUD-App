import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom'

const EditServiceData = () => {
    const [service,setService] = useState([]);
    useEffect(()=>{
        axios.get("https://ehealthcareserviceappdata.onrender.com/services")
        .then((res)=>{
            setService(res.data)
        })
        .catch((err)=>{
            console.log('dada is not displayed.')
        })
})
  return (
    <div>
         <h3>Edit Service data</h3>
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
                {
                    service.map((data)=>{
                        return(
                            <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td> <img src={data.icon} alt="" /></td>
                            <td><div className='parahide'>{data.para1}</div></td>
                            <td><div className='parahide'>{data.para2}</div></td>
                             <td><NavLink to={`/editservicedataForm/${data.id}`}><button className='btn btn-primary'>Edit</button></NavLink></td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default EditServiceData;