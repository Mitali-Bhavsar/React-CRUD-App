import { useEffect, useState } from 'react'

const useHomeGetData = (url) => {
    const [data,setData] = useState([]);

    useEffect(()=>{
      fetch(url)
      .then((res)=>res.json())
      .then((data)=>setData(data))
      .catch((err)=>console.log(err))
    },[url])
  
  return data;
}
export default useHomeGetData;
