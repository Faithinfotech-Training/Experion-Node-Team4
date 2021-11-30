import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import Manager from "../pages/Manager/Manager";
import UserPage from "../pages/User/UserPage";
import Admin from "../pages/Admin";
import Header from "../Header/Header";

//Access Denied page 
import AdminError from "../pages/AuthError/AdminError";

// Login form
import LoginForm from "../pages/Login/LoginForm";

//Registration Form
import RegistrationForm from "../pages/Registration/RegistrationForm";

//Course Enquiry Form Component
import CourseEnquiryForm from "../pages/CourseEnquiryForm/CourseEnquiryForm";

//Resource Enquiry Form Component
import ResourceEnquiryForm from "../pages/ResourceEnquiryForm/ResourceEnquiryForm";

//Components for course Management
import CourseMng from "../pages/Course/CourseMng";
import AddCourse from "../pages/Course/AddCourse/AddCourse";
import EditCourse from "../pages/Course/EditCourse/EditCourse";
import ViewCourse from "../pages/Course/ViewCourse/ViewCourse";
import CourseDetails from "../pages/Course/CourseDetails/CourseDetails";

//Components for course enquiry Management
import CeqMng from "../pages/CourseEnquiryManagement/CeqMng";
import ViewCeq from "../pages/CourseEnquiryManagement/ViewCeq/ViewCeq";
import EditCeq from "../pages/CourseEnquiryManagement/EditCeq/EditCeq";
import CeqDetails from "../pages/CourseEnquiryManagement/CeqDetails/CeqDetails";

//imp0rting the resource management components.
import ResourceMng from "../pages/ResourceManagement/ResourceMng";
import AddResource from "../pages/ResourceManagement/AddResource/AddResource";
import ViewResource from "../pages/ResourceManagement/ViewResource/ViewResource";
import EditResource from "../pages/ResourceManagement/EditResource/EditResource";

//Components for resource enquiry Management
import ReqMng from "../pages/resource enquiry management/ReqMng";
import ViewReq from "../pages/resource enquiry management/ViewReq/ViewReq";
import EditReq from "../pages/resource enquiry management/EditReq/EditReq";

// components for view course enquiry
import ViewCourseEnquiry from "../pages/Manager/VIewCourseEnquiry";
import ViewResourseEnquiry from "../pages/Manager/ViewResourceEnquiry";
import SalesPipeline from "../pages/Manager/VIewSalesPipeline";
import SitesVisits from "../pages/Manager/SiteVIsitsVIew";

function Routers(props) {

  let [role, setRole] = useState(false);
  const roles = (role) => {
    if (localStorage.getItem('role') === 'Admin') {
      setRole(true);
    }
  }

  
  useEffect(()=>{
    roles(role);
   
}, [])


  return (
    <Router>
      <Header />

      <Routes>

        {/* Routes for Course Enqiuiry Form */}
        <Route path="/home/course-enquiry" element={<CourseEnquiryForm />} />

        {/* Routes for Resource Enqiuiry Form */}
        <Route path="/home/resource-enquiry" element={<ResourceEnquiryForm />} />
        {/* Route for Registration form */}
        <Route path="/home/register" element={<RegistrationForm />} />

        {/* Route for login form */}
        <Route path="/home/login" element={<LoginForm />} />

        {/* Route for user page */}
        <Route path="/home/user/:id" element={<UserPage />} />

        {/* Admin Page */}
        <Route path="/admin/" element={role && localStorage.getItem('mytoken') && <Admin />} />

        {/* Admin error Page */}

        {/* Routes for Course Management */}
        <Route path="/admin/course" element={role && localStorage.getItem('mytoken') && <CourseMng />} />
        <Route path="/admin/course/add-course" element={role && localStorage.getItem('mytoken') &&<AddCourse />} />
        <Route path="/admin/course/edit-course" element={role && localStorage.getItem('mytoken') &&<EditCourse />} />
        <Route path="/admin/course/view-courses" element={role && localStorage.getItem('mytoken') &&<ViewCourse />} />
        <Route path="/admin/course/view-courses/:id" element={role && localStorage.getItem('mytoken') &&<CourseDetails />} />

        {/* Routes for Course Enquiry Management */}
        <Route path="/admin/course-enquiry" element={role && localStorage.getItem('mytoken') &&<CeqMng />} />
        <Route path="/admin/course-enquiry/view-course-enquiry" element={role && localStorage.getItem('mytoken') &&<ViewCeq />} />
        <Route path="/admin/course-enquiry/view-course-enquiry/:id" element={role && localStorage.getItem('mytoken') &&<CeqDetails />} />
        <Route path="/admin/course-enquiry/edit-course-enquiry" element={role && localStorage.getItem('mytoken') &&<EditCeq />} />

        {/* Routes for Resource Management      */}

        <Route path="/admin/resource" element={role && localStorage.getItem('mytoken') &&<ResourceMng />} />
        <Route path="/admin/resource/add-resource" element={role && localStorage.getItem('mytoken') &&<AddResource />} />
        <Route path="/admin/resource/edit-resource" element={role && localStorage.getItem('mytoken') &&<EditResource />} />
        <Route path="/admin/resource/view-resources" element={role && localStorage.getItem('mytoken') &&<ViewResource />} />

        {/* Routes for Resource Enquiry Management */}
        <Route path="/admin/resource-enquiry" element={role && localStorage.getItem('mytoken') &&<ReqMng />} />
        <Route path="/admin/resource-enquiry/view-resource-enquiry" element={role && localStorage.getItem('mytoken') &&<ViewReq />} />
        <Route path="/admin/resource-enquiry/edit-resource-enquiry" element={role && localStorage.getItem('mytoken') &&<EditReq />} />

        {/* Manager HomePage */}
        <Route path="/manager" element={<Manager />} />

        {/* Routes for managers to view course enquiry */}
        <Route path="/manager/view-course-enquiry" element={<ViewCourseEnquiry />} />
        <Route path="/manager/view-resourse-enquiry" element={<ViewResourseEnquiry />} />
        {/* Routes for sales pipeline and site visits */}
        <Route path="/manager/view-sales-pipeline" element={<SalesPipeline />} />
        <Route path="/manager/view-site-visits" element={<SitesVisits />} />
      </Routes>


    </Router>
  );
}

export default Routers;
