import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Manager from "../pages/Manager/Manager";
import UserPage from "../pages/User/UserPage";
import Admin from "../pages/Admin";
import Home from "../pages/Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
import ReqDetails from "../pages/resource enquiry management/ReqDetails/ReqDetails";

// components for view course enquiry
import ManagerViewCourseEnquiry from "../pages/Manager/VIewCourseEnquiry";
import ManagerViewCourseEnquiryDetails from "../pages/Manager/ViewCourseEnquiryDetails";
import ViewResourseEnquiry from "../pages/Manager/ViewResourceEnquiry";
import ManagerViewResourceEnquiryDetails from "../pages/Manager/ViewResourceEnquiryDetails";
import SitesVisitsTableView from "../pages/Manager/SiteVIsitsTableVIew";

import SitesVisitsChartView from "../pages/Manager/SiteVIsitsChartVIew";
import ManagerRegistrationForm from "../pages/Registration/ManagerRegistrationForm";

function Routers(props) {
  let [role, setRole] = useState(false);
  const roles = (role) => {
    if (localStorage.getItem("role") === "Admin") {
      setRole(true);
    }
  };

  useEffect(() => {
    roles(role);
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        {/* Route for home page */}
        <Route path="/home/" element={<Home />} />

        {/* Routes for Course Enqiuiry Form */}
        <Route path="/home/course-enquiry" element={<CourseEnquiryForm />} />

        {/* Routes for Resource Enqiuiry Form */}
        <Route
          path="/home/resource-enquiry"
          element={<ResourceEnquiryForm />}
        />
        {/* Route for Registration form */}
        <Route path="/home/register" element={<RegistrationForm />} />

        {/* Route for login form */}
        <Route path="/home/login" element={<LoginForm />} />

        {/* Route for user page */}
        <Route path="/home/user/:id" element={<UserPage />} />

        {/* Admin Page */}
        <Route
          path="/admin/"
          element={role && localStorage.getItem("mytoken") && <Admin />}
        />

        {/* Admin error Page */}

        {/* Routes for Course Management */}
        <Route
          path="/admin/course"
          element={role && localStorage.getItem("mytoken") && <CourseMng />}
        />
        <Route
          path="/admin/course/add-course"
          element={role && localStorage.getItem("mytoken") && <AddCourse />}
        />
        <Route
          path="/admin/course/edit-course/:id"
          element={role && localStorage.getItem("mytoken") && <EditCourse />}
        />
        <Route
          path="/admin/course/view-courses"
          element={role && localStorage.getItem("mytoken") && <ViewCourse />}
        />
        <Route
          path="/admin/course/view-courses/:id"
          element={role && localStorage.getItem("mytoken") && <CourseDetails />}
        />

        {/* Routes for Course Enquiry Management */}
        <Route
          path="/admin/course-enquiry"
          element={role && localStorage.getItem("mytoken") && <CeqMng />}
        />
        <Route
          path="/admin/course-enquiry/view-course-enquiry"
          element={role && localStorage.getItem("mytoken") && <ViewCeq />}
        />
        <Route
          path="/admin/course-enquiry/view-course-enquiry/:id"
          element={role && localStorage.getItem("mytoken") && <CeqDetails />}
        />
        <Route
          path="/admin/course-enquiry/edit-course-enquiry/:id"
          element={role && localStorage.getItem("mytoken") && <EditCeq />}
        />

        {/* Routes for Resource Management      */}

        <Route path="/admin/resource" element={<ResourceMng />} />
        <Route path="/admin/resource/add-resource" element={<AddResource />} />
        <Route
          path="/admin/resource/edit-resource/:id"
          element={<EditResource />}
        />
        {/* <Route path="/admin/resource/delete-resources" element={<DeleteResourcess />}/> */}
        <Route
          path="/admin/resource/view-resources"
          element={<ViewResource />}
        />

        {/* Routes for Resource Enquiry Management */}
        <Route
          path="/admin/resource-enquiry"
          element={role && localStorage.getItem("mytoken") && <ReqMng />}
        />
        <Route
          path="/admin/resource-enquiry/view-resource-enquiry"
          element={role && localStorage.getItem("mytoken") && <ViewReq />}
        />
        <Route
          path="/admin/resource-enquiry/view-resource-enquiry/:id"
          element={role && localStorage.getItem("mytoken") && <ReqDetails />}
        />
        <Route
          path="/admin/resource-enquiry/edit-resource-enquiry/:id"
          element={role && localStorage.getItem("mytoken") && <EditReq />}
        />

        {/* Manager HomePage */}
        <Route path="/manager" element={<Manager />} />
        <Route
          path="/admin/register-manager"
          element={<ManagerRegistrationForm />}
        />
        {/* Routes for managers to view course and Resourse enquiry */}
        <Route
          path="/manager/view-course-enquiry"
          element={<ManagerViewCourseEnquiry />}
        />
        <Route
          path="/manager/view-resourse-enquiry"
          element={<ViewResourseEnquiry />}
        />
        <Route
          path="manager/view-resourse-enquiry/:id"
          element={<ManagerViewResourceEnquiryDetails />}
        />
        <Route
          path="manager/view-course-enquiry/:id"
          element={<ManagerViewCourseEnquiryDetails />}
        />

        {/* Routes for sales pipeline and site visits */}
        <Route path="/manager/view-chart" element={<SitesVisitsChartView />} />
        <Route path="/manager/view-table" element={<SitesVisitsTableView />} />
      </Routes>
      <br />
      {/* <Footer /> */}
    </Router>
  );
}

export default Routers;
