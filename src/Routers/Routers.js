import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from "../pages/Admin";

import CourseMng from "../pages/Course/CourseMng";
import AddCourse from "../pages/Course/AddCourse";
import EditCourse from "../pages/Course/EditCourse/EditCourse";
import ViewCourse from "../pages/Course/ViewCourse/ViewCourse";

//imprting the resource management components.
import ResourceMng from "../pages/ResourceManagement/ResourceMng";
import AddResource from "../pages/ResourceManagement/AddResource/AddResource";
import ViewResource from "../pages/ResourceManagement/ViewResource/ViewResource";
import EditResource from "../pages/ResourceManagement/EditResource/EditResource";

function Routers() {
  return (
    <Router>
      <Admin />

      <Routes>
        <Route path="/admin/course" element={<CourseMng />} />
        <Route path="/admin/course/add-course" element={<AddCourse />} />
        <Route path="/admin/course/edit-course" element={<EditCourse />}/>
        <Route path="/admin/course/view-courses" element={<ViewCourse />}/>

        {/* Routes for Resource Management      */}

         <Route path="/admin/resource" element={<ResourceMng />} />
        <Route path="/admin/resource/add-resource" element={<AddResource />} />
        <Route path="/admin/resource/edit-resource" element={<EditResource /> }/> 
          <Route path="/admin/resource/view-resources" element={<ViewResource/> }/>

        
        </Routes>
    </Router>
  );
}

export default Routers;
