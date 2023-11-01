import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import AboutUs from './AboutUs';
import Services from './Services';
import Offers from './Offers';
import BookService from './BookService';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import AllServiceFile from './AllServiceFile';
import AdminDashboard from './AdminDashboard';
import LoginAdmin from './LoginAdmin';
import AllServiceData from './allservicedata';
import DeleteServiceData from './deleteservicedata';
import EditServiceData from './editservicedata';
import EditServiceDataForm from './editservicedataForm';
import AddServiceData from './addservicedata';
import AddOfferData from './addofferdata';
import EditOfferData from './editofferdata';
import EditOfferDataForm from './editofferdataForm';
import DeleteOfferData from './deleteofferdata';
import AllOfferData from './allofferdata';
import AddTestimonialData from './addtestimonialdata';
import EditTestimonialData from './edittestimonialdata';
import EditTestimonialDataForm from './edittestimonialdataForm';
import DeleteTestimonialData from './deletetestimonialdata';
import AllTestimonialData from './alltestimonialdata';
import AllContactData from './allcontactdata';
import AllBookServiceData from './allbookservicedata';
import AllQuickEnquiryData from './allquickenquirydata';


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/bookservice" element={<BookService />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/allservicefile/:sno" element={<AllServiceFile />} />
            {/* <Route path="/editservicedataForm/:sno" element={<EditServiceDataForm />} />  this route is for service update*/}
            <Route path="/editservicedataForm/:sno" element={<EditServiceDataForm />} />
            <Route path="/editofferdataForm/:sno" element={<EditOfferDataForm />} />
            <Route path="/edittestimonialdataForm/:sno" element={<EditTestimonialDataForm />} />
            <Route path="/loginadmin" element={<LoginAdmin />}/>
            <Route path="/admindashboard" element={<AdminDashboard />}>
                         {/* ---service start----*/}
                <Route path="addservicedata" element={<AddServiceData />} />
                <Route path="editservicedata" element={<EditServiceData />} /> {/*this is just for getteting that data in form*/}
                <Route path="deleteservicedata" element={<DeleteServiceData />} />
                <Route path="allservicedata" element={<AllServiceData />} />
                          {/* ---service end----*/}
                          {/* ---offer start----*/}
                <Route path="addofferdata" element={<AddOfferData />} />
                <Route path="editofferdata" element={<EditOfferData />} />
                <Route path="deleteofferdata" element={<DeleteOfferData />} />
                <Route path="allofferdata" element={<AllOfferData />} />
                           {/* ---offer end----*/}
                           {/* ---testimonial start----*/}
                <Route path="addtestimonialdata" element={<AddTestimonialData />} />
                <Route path="edittestimonialdata" element={<EditTestimonialData />} />
                <Route path="deletetestimonialdata" element={<DeleteTestimonialData />} />
                <Route path="alltestimonialdata" element={<AllTestimonialData />} />
                            {/* ---testimonial end----*/}
                             {/* ---contact start----*/}
                <Route path="allcontactdata" element={<AllContactData />} />            
                              {/* ---contact end----*/}
                              {/* ---bookservice start----*/}
                <Route path="allbookservicedata" element={<AllBookServiceData />} />            
                              {/* ---bookservice end----*/}
                               {/* ---quickenquiry start----*/}
                <Route path="allquickenquirydata" element={<AllQuickEnquiryData />} />            
                              {/* ---quickenquiry end----*/}
            </Route>
           
        </Routes>
    </div>
  )
}

export default Routing