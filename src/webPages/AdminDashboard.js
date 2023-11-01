import React from 'react';
import SideBar from './SideBar';
import {  NavLink,Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
          {/* <!--------breadcrumb start--------->*/}
          <section className="bread">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 py-4 ">
                       
                        <div className="">
                            <h2 className='ps-500'>Admin DashBoard</h2>
                            <ul className="breadcrumb ps-500">
                                <li className="breadcrumb-item"> <NavLink to="/">Home</NavLink></li>
                                <li className="breadcrumb-item active text-secondary" >Admin DashBoard</li>
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
            <div className='col-md-3'>
            <SideBar />
            </div>
            <div className='col-md-9'>
            <Outlet />
            </div>
        </div>
    </div>
   </section>
   </div>
  )
}

export default AdminDashboard