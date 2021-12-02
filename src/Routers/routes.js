import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
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



function MapRoutes() {

    const routes = [
        {
            url: "/home/",
            component: Home,
            role: ["Any"]
        },

        {
            url: "/home/course-enquiry",
            component: CourseEnquiryForm,
            role: ["User"]
        },
        {
            url: "/home/resource-enquiry",
            component: ResourceEnquiryForm,
            role: ["User"]
        },
        {
            url: "/home/register",
            component: RegistrationForm,
            role: ["Any"]
        },
        {
            url: "/home/login",
            component: LoginForm,
            role: ["Any"]
        },
        {
            url: "/home/user/:id",
            component: UserPage,
            role: ["User"]
        },
        {
            url: "/user/view-resources",
            component: ViewResource,
            role: ["User"]
        },
        {
            url: "/user/view-courses",
            component: ViewCourse,
            role: ["User"]
        },
        {
            url: "/user/view-courses/:id",
            component: CourseDetails,
            role: ["User"]
        },
        {
            url: "/admin/",
            component: Admin,
            role: ["Admin"]
        },
        {
            url: "/admin/course",
            component: CourseMng,
            role: ["Admin"]
        },
        {
            url: "/admin/course/add-course",
            component: AddCourse,
            role: ["Admin"]
        },
        {
            url: "/admin/course/edit-course/:id",
            component: EditCourse,
            role: ["Admin"]
        },
        {
            url: "/admin/course/view-courses",
            component: ViewCourse,
            role: ["Admin"]
        },
        {
            url: "/admin/course/view-courses/:id",
            component: CourseDetails,
            role: ["Admin"]
        },
        {
            url: "/admin/course-enquiry",
            component: CeqMng,
            role: ["Admin"]
        },
        {
            url: "/admin/course-enquiry/view-course-enquiry",
            component: ViewCeq,
            role: ["Admin"]
        },
        {
            url: "/admin/course-enquiry/view-course-enquiry/:id",
            component: CeqDetails,
            role: ["Admin"]
        },
        {
            url: "/admin/course-enquiry/edit-course-enquiry/:id",
            component: EditCeq,
            role: ["Admin"]
        },
        {
            url: "/admin/resource",
            component: ResourceMng,
            role: ["Admin"]
        },
        {
            url: "/admin/resource/add-resource",
            component: AddResource,
            role: ["Admin"]
        },
        {
            url: "/admin/resource/edit-resource/:id",
            component: EditResource,
            role: ["Admin"]
        },
        {
            url: "/admin/resource/view-resources",
            component: ViewResource,
            role: ["Admin"]
        },
        {
            url: "/admin/resource-enquiry",
            component: ReqMng,
            role: ["Admin"]
        },
        {
            url: "/admin/resource-enquiry/view-resource-enquiry",
            component: ViewReq,
            role: ["Admin"]
        },
        {
            url: "/admin/resource-enquiry/view-resource-enquiry/:id",
            component: ReqDetails,
            role: ["Admin"]
        },
        {
            url: "/admin/resource-enquiry/edit-resource-enquiry/:id",
            component: EditReq,
            role: ["Admin"]
        },
        {
            url: "/manager",
            component: Manager,
            role: ["Manager"]
        },
        {
            url: "/admin/register-manager",
            component: ManagerRegistrationForm,
            role: ["Manager"]
        },
        {
            url: "/manager/view-course-enquiry",
            component: ManagerViewCourseEnquiry,
            role: ["Manager"]
        },
        {
            url: "/manager/view-resourse-enquiry",
            component: ViewResourseEnquiry,
            role: ["Manager"]
        },
        {
            url: "manager/view-resourse-enquiry/:id",
            component: ManagerViewResourceEnquiryDetails,
            role: ["Manager"]
        },
        {
            url: "manager/view-course-enquiry/:id",
            component: ManagerViewCourseEnquiryDetails,
            role: ["Manager"]
        },
        {
            url: "/manager/view-chart",
            component: SitesVisitsChartView,
            role: ["Manager"]
        },
        {
            url: "/manager/view-table",
            component: SitesVisitsTableView,
            role: ["Manager"]
        }
    ]
    let [admin, setAdmin] = useState(false);
    const roles = (role) => {
      if (localStorage.getItem("role") === "Admin") {
        setAdmin(true);
        return admin && 
      }
    };
  
    useEffect(() => {
      roles(role);
    }, []);

return(
    <Router>
        <Header />

        <Routes>

        </Routes>
    </Router>
)


}


// const routes = [
//     {
//         url: "/home/",
//         component: Home
//     },

//     {
//         url: "/home/course-enquiry",
//         component: CourseEnquiryForm,
//     },
//     {
//         url: "/home/resource-enquiry",
//         component: ResourceEnquiryForm
//     },
//     {
//         url: "/home/register",
//         component: RegistrationForm
//     },
//     {
//         url: "/home/login",
//         component: LoginForm
//     },
//     {
//         url: "/home/user/:id",
//         component: UserPage
//     },
//     {
//         url: "/user/view-resources",
//         component: ViewResource
//     },
//     {
//         url: "/user/view-courses",
//         component: ViewCourse
//     },
//     {
//         url: "/user/view-courses/:id",
//         component: CourseDetails
//     },
//     {
//         url: "/admin/",
//         component: Admin
//     },
//     {
//         url: "/admin/course",
//         component: CourseMng
//     },
//     {
//         url: "/admin/course/add-course",
//         component: AddCourse
//     },
//     {
//         url: "/admin/course/edit-course/:id",
//         component: EditCourse
//     },
//     {
//         url: "/admin/course/view-courses",
//         component: ViewCourse
//     },
//     {
//         url: "/admin/course/view-courses/:id",
//         component: CourseDetails
//     },
//     {
//         url: "/admin/course-enquiry",
//         component: CeqMng
//     },
//     {
//         url: "/admin/course-enquiry/view-course-enquiry",
//         component: ViewCeq
//     },
//     {
//         url: "/admin/course-enquiry/view-course-enquiry/:id",
//         component: CeqDetails
//     },
//     {
//         url: "/admin/course-enquiry/edit-course-enquiry/:id",
//         component: EditCeq
//     },
//     {
//         url: "/admin/resource",
//         component: ResourceMng
//     },
//     {
//         url: "/admin/resource/add-resource",
//         component: AddResource
//     },
//     {
//         url: "/admin/resource/edit-resource/:id",
//         component: EditResource
//     },
//     {
//         url: "/admin/resource/view-resources",
//         component: ViewResource
//     },
//     {
//         url: "/admin/resource-enquiry",
//         component: ReqMng
//     },
//     {
//         url: "/admin/resource-enquiry/view-resource-enquiry",
//         component: ViewReq
//     },
//     {
//         url: "/admin/resource-enquiry/view-resource-enquiry/:id",
//         component: ReqDetails
//     },
//     {
//         url: "/admin/resource-enquiry/edit-resource-enquiry/:id",
//         component: EditReq
//     },
//     {
//         url: "/manager",
//         component: Manager
//     },
//     {
//         url: "/admin/register-manager",
//         component: ManagerRegistrationForm
//     },
//     {
//         url: "/manager/view-course-enquiry",
//         component: ManagerViewCourseEnquiry
//     },
//     {
//         url: "/manager/view-resourse-enquiry",
//         component: ViewResourseEnquiry
//     },
//     {
//         url: "manager/view-resourse-enquiry/:id",
//         component: ManagerViewResourceEnquiryDetails
//     },
//     {
//         url: "manager/view-course-enquiry/:id",
//         component: ManagerViewCourseEnquiryDetails
//     },
//     {
//         url: "/manager/view-chart",
//         component: SitesVisitsChartView
//     },
//     {
//         url: "/manager/view-table",
//         component: SitesVisitsTableView
//     }
// ]

