import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Manager from "../pages/Manager/Manager";

// components for view course enquiry
import ViewCourseEnquiry from "../pages/Manager/VIewCourseEnquiry";
import ViewResourseEnquiry from "../pages/Manager/ViewResourceEnquiry";
import SalesPipeline from "../pages/Manager/VIewSalesPipeline";
import SitesVisits from "../pages/Manager/VIewSiteVIsits";

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
          path="/manager/view-resourse-enquiry"
          element={<ViewResourseEnquiry />}
        />
        {/* Routes for sales pipeline and site visits */}
        <Route
          path="/manager/view-sales-pipeline"
          element={<SalesPipeline />}
        />
        <Route path="/manager/view-site-visits" element={<SitesVisits />} />
      </Routes>
    </Router>
  );
}

export default ManagerRouters;
