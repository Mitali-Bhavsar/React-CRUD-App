import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
    const [uname, setUname] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();
    const submitHandeler = (e) => {
        e.preventDefault();
        if (uname === "Admin" && pwd === "123456") {
            navigate("/admindashboard");
        }
        else {
            alert("Please enter valid name and pass")
        }
    }

    return (

       <div>
               {/* <!--------breadcrumb start--------->*/}
        <section className="bread">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 py-4 ">
                       
                        <div className="">
                            <h2 className='ps-500'><span>Admin Login</span></h2>
                            <ul className="breadcrumb ps-500">
                                <li className="breadcrumb-item"> <NavLink to="/">Home</NavLink></li>
                                <li className="breadcrumb-item active text-secondary" >Admin Login</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
   {/* <!--------breadcrumb end--------->*/}
   <section>
   <div className='container'>
       <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-7'>
                        <div className='loginstyle justify-content-center'>
                             <form onSubmit={submitHandeler} className='pl-180 pt-4  pb-4'>
                                <div className='col-md-4 pb-3'>
                                    <input type="text" name="uname" placeholder="User Name" value={uname} onChange={(e) => setUname(e.target.value)} className='form-control' />

                                </div>
                                <div className='col-md-4 pb-3'>
                                    <input type="password" name="pwd" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} className='form-control' />

                                </div>
                                <div className='col-md-4'>
                                <input type="submit" value="submit" className='btn btn-primary' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default LoginAdmin