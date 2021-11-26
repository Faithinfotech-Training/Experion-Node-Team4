import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from "../pages/Admin";

import CourseMng from "../pages/Course/CourseMng";
import AddCourse from "../pages/Course/AddCourse";
import EditCourse from "../pages/Course/EditCourse/EditCourse";
import ViewCourse from "../pages/Course/ViewCourse/ViewCourse";


function Routers() {
  return (
    <Router>
      <Admin />

      <Routes>
        <Route path="/admin/course" element={<CourseMng />} />
        <Route path="/admin/course/add-course" element={<AddCourse />} />
        <Route path="/admin/course/edit-course" element={<EditCourse />}/>
        <Route path="/admin/course/view-courses" element={<ViewCourse />}/>
        </Routes>
    </Router>
  );
}

export default Routers;
