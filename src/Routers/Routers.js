import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

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

//importing the resource management components.
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

//components for viewing courses and resources offered in Home Page
import OfferedCourses from "../pages/Home/OfferedCourses";
import OfferedResources from "../pages/Home/OfferedResources";
import ViewResourceList from "../pages/ResourceManagement/ViewResource/ViewResourceList";
import UserCourseEnquiryForm from "../pages/User/UserCourseEnquiryForm";
import UserResourceEnquiryForm from "../pages/User/UserResourceEnquiryForm";
import UserContext from "../context/user-context";

const Routers = (props) => {
  const userContext = useContext(UserContext);
  return (
    <Router>
      <Header />

      <Routes>
        {/* Route for home page */}
        <Route path="/home/" element={<Home />} />

        {/* Routes for viewing courses and resources offeredd in Home Page */}
        <Route path="/home/offered-courses" element={<OfferedCourses />} />
        <Route path="/home/offered-resources" element={<OfferedResources />} />

        {/* Routes for Course Enqiuiry Form */}
        <Route path="/home/course-enquiry" element={<CourseEnquiryForm />} />

        {/* Routes for Resource Enqiuiry Form */}
        <Route path="/home/resource-enquiry" element={<ResourceEnquiryForm />}
        />
        {/* Route for Registration form */}
        <Route path="/home/register" element={<RegistrationForm />} />

        {/* Route for login form */}
        <Route path="/home/login" element={<LoginForm />} />

        {/* Route for user page */}
        <Route path="/home/user/:id" element={<UserPage />} />

        {/* Routes for user view resource from user page */}
        <Route path="/user/view-resources" element={userContext.userDetails && <ViewResourceList />} />
        <Route path="/user/view-resources/:id" element={userContext.userDetails && <ViewResource />} />
        <Route path="/user/resource-enquiry" element={userContext.userDetails && <UserResourceEnquiryForm />} />
        {/* Routes for user view course from user page */}
        <Route
          path="/user/view-courses"
          element={userContext.userDetails && <ViewCourse />}
        />
        {/* Path for Course detail for users */}
        <Route
          path="/user/view-courses/:id"
          element={userContext.userDetails && <CourseDetails />}
        />

        <Route path="/user/course-enquiry/" element={userContext.userDetails && <UserCourseEnquiryForm />} />

        {/* Admin Page */}
        <Route
          path="/admin/"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <Admin />}
        />

        {/* Admin error Page */}

        {/* Routes for Course Management */}
        <Route
          path="/admin/course"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <CourseMng />}
        />
        <Route
          path="/admin/course/add-course"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <AddCourse />}
        />
        <Route
          path="/admin/course/edit-course/:id"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <EditCourse />}
        />
        <Route
          path="/admin/course/view-courses"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <ViewCourse />}
        />
        <Route
          path="/admin/course/view-courses/:id"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <CourseDetails />}
        />

        {/* Routes for Course Enquiry Management */}
        <Route
          path="/admin/course-enquiry"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <CeqMng />}
        />
        <Route
          path="/admin/course-enquiry/view-course-enquiry"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <ViewCeq />}
        />
        <Route
          path="/admin/course-enquiry/view-course-enquiry/:id"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <CeqDetails />}
        />
        <Route
          path="/admin/course-enquiry/edit-course-enquiry/:id"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <EditCeq />}
        />

        {/* Routes for Resource Management      */}

        <Route path="/admin/resource" element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <ResourceMng />} />
        <Route path="/admin/resource/add-resource" element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <AddResource />} />
        <Route
          path="/admin/resource/edit-resource/:id"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <EditResource />}
        />
        {/* <Route path="/admin/resource/delete-resources" element={<DeleteResourcess />}/> */}
        <Route
          path="/admin/resource/view-resources"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <ViewResourceList />}
        />
        <Route
          path="/admin/resource/view-resources/:id"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <ViewResource />}
        />

        {/* Routes for Resource Enquiry Management */}
        <Route
          path="/admin/resource-enquiry"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <ReqMng />}
        />
        <Route
          path="/admin/resource-enquiry/view-resource-enquiry"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <ViewReq />}
        />
        <Route
          path="/admin/resource-enquiry/view-resource-enquiry/:id"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <ReqDetails />}
        />
        <Route
          path="/admin/resource-enquiry/edit-resource-enquiry/:id"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <EditReq />}
        />

        {/* Manager HomePage */}
        <Route path="/manager" element={userContext.userDetails && userContext.userDetails.role === 'Manager' && <Manager />} />
        <Route
          path="/admin/register-manager"
          element={userContext.userDetails && userContext.userDetails.role === 'Admin' && <ManagerRegistrationForm />}
        />
        {/* Routes for managers to view course and Resourse enquiry */}
        <Route
          path="/manager/view-course-enquiry"
          element={userContext.userDetails && userContext.userDetails.role === 'Manager' && <ManagerViewCourseEnquiry />}
        />
        <Route
          path="/manager/view-resourse-enquiry"
          element={userContext.userDetails && userContext.userDetails.role === 'Manager' && <ViewResourseEnquiry />}
        />
        <Route
          path="manager/view-resourse-enquiry/:id"
          element={userContext.userDetails && userContext.userDetails.role === 'Manager' && <ManagerViewResourceEnquiryDetails />}
        />
        <Route
          path="manager/view-course-enquiry/:id"
          element={userContext.userDetails && userContext.userDetails.role === 'Manager' && <ManagerViewCourseEnquiryDetails />}
        />

        {/* Routes for sales pipeline and site visits */}
        <Route path="/manager/view-chart" element={userContext.userDetails && userContext.userDetails.role === 'Manager' && <SitesVisitsChartView />} />
        <Route path="/manager/view-table" element={userContext.userDetails && userContext.userDetails.role === 'Manager' && <SitesVisitsTableView />} />
      </Routes>
      <br />
      {/* <Footer /> */}
    </Router>
  );
}

export default Routers;
