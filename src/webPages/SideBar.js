import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sidebar'>
         <div className='container'>
            <div className='row'>
                <ul>
                    <h2>Service</h2>
                    <li>
                        <NavLink to="addservicedata">Add Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="editservicedata">Edit Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="deleteservicedata">Delete Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="allservicedata">Show All Service Data</NavLink>
                    </li>
                    <h2>Offers</h2>
                    <li>
                        <NavLink to="addofferdata">Add Offer</NavLink>
                    </li>
                    <li>
                        <NavLink to="editofferdata">Edit Offer</NavLink>
                    </li>
                    <li>
                        <NavLink to="deleteofferdata">Delete Offer</NavLink>
                    </li>
                    <li>
                        <NavLink to="allofferdata">Show All Offer Data</NavLink>
                    </li>
                    <h2>Testimonial</h2>
                    <li>
                        <NavLink to="addtestimonialdata">Add Testimonial</NavLink>
                    </li>
                    <li>
                        <NavLink to="edittestimonialdata">Edit Testimonial</NavLink>
                    </li>
                    <li>
                        <NavLink to="deletetestimonialdata">Delete Testimonial</NavLink>
                    </li>
                    <li>
                        <NavLink to="alltestimonialdata">Show All Testimonial Data</NavLink>
                    </li>
                    <h2>Others</h2>
                    <li>
                        <NavLink to="allcontactdata">Show All Contact Detail</NavLink>
                    </li>
                    <li>
                        <NavLink to="allbookservicedata">Show All Book Service Detail</NavLink>
                    </li>
                    <li>
                        <NavLink to="allquickenquirydata">Show All Quick Enquiry Detail</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar