import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";
import Tables from "./Table/Table";
import VisitTable from "./Table/TableAxios";

function SitesVisitsTableView() {
  return (
    <div>
      <ManagerDashboard />
      {/* <p>This is page for Table...</p> */}
      {/* <Tables /> */}
      <VisitTable />
    </div>
  );
}

export default SitesVisitsTableView;
