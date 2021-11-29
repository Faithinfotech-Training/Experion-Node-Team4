import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Manager from "../pages/Manager/Manager";

// components for view course enquiry
import ViewCourseEnquiry from "../pages/Manager/VIewCourseEnquiry";
import ViewResourseEnquiry from "../pages/Manager/ViewResourceEnquiry";

function ManagerRouters() {
  return (
    <Router>
      <Manager />

      <Routes>
        {/* Routes for view course and resource enquiry  */}
        <Route
          path="/manager/view-course-enquiry"
          element={<ViewCourseEnquiry />}
        />
        <Route
          path="/manager/view-resource-enquiry"
          element={<ViewResourseEnquiry />}
        />
        {/* Routes for view course and resource enquiry update status */}
        <Route
          path="/manager/course-enquiry-update-status"
          element={<ViewResourseEnquiry />}
        />
        <Route
          path="/manager/resourse-enquiry-update-status"
          element={<ViewResourseEnquiry />}
        />
        <Route
          path="/manager/view-sales-pipeline"
          element={<ViewResourseEnquiry />}
        />
      </Routes>
    </Router>
  );
}

export default ManagerRouters;
