import React,{useState,useEffect} from 'react';
import axios from 'axios';

const DeleteTestimonialData = () => {
    const[testimonial,setTestmonial] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/testimonial")
        .then((res)=>{
            setTestmonial(res.data)
        })
        .catch((err)=>{
            console.log('data is unable to display')
        })
    })
    const deleteData =(sid) =>{
        axios.delete(`http://localhost:4000/testimonial/${sid}`)
        .then((ers)=>{
            alert("Data is deleted.")
        })
        .catch((err)=>{
            alert("Data is not deleted")
        })
    }
  return (
    <div>
        <h3>Delete Testmonial Data</h3>
        <table>
            <thead>
                <tr>
                <td>ID</td>
                    <td>NAME</td>
                    <td>COMMENT</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
               
            {testimonial.map((data)=>{
                    return (
                        <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.comment}</td>
                        <td><button onClick={()=>{deleteData(data.id)}} className='btn btn-primary'>Delete</button></td>
                        </tr>
                    )
                   })}
                       
                   
            </tbody>
        </table>
    </div>
  )
}

export default DeleteTestimonialData;