import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";
// import Tables from "./Table/Table";
import VisitTable from "./Table/TableAxios";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function SitesVisitsTableView() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/manager/')
  }
  return (
    <div>
      <ManagerDashboard />
      {/* <p>This is page for Table...</p> */}
      {/* <Tables /> */}
      <VisitTable />
      <center>
        <Button className="right" variant="primary" type="reset" onClick={() => goBack()}>
          Go Back
        </Button></center>
    </div>
  );
}

export default SitesVisitsTableView;
