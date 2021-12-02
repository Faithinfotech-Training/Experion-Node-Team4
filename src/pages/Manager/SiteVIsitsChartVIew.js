import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";
import Chart from "./Chart/Chart";
import BarChartScreen from "./Chart/BarChartApi";
import LineChartScreen from "./Chart/LineChartApi";
import PieChartScreen from "./Chart/PieChartApi";
import DonChart from "./Chart/GraphApi";
// import LineChart from "./Chart/BlueLineChart";
import Dankmemes from "./Chart/CourseChartAPi";

function SitesVisitsChartView() {
  return (
    <div>
      <div>
        <ManagerDashboard />
      </div>
      <div className="container-fluid">
        {/* <h3 className={styles.headerText}>Dashboard</h3> */}
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              <h4>Bar Chart</h4>
              <BarChartScreen />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              <h4>Line Chart</h4>
              <PieChartScreen />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              <h4>Donought Chart</h4>
              <Chart />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              <h4>Graph Chart</h4>
              <DonChart />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              <h4>Pie Chart</h4>
              <LineChartScreen />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              <h4>Pie Chart</h4>
              <Dankmemes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitesVisitsChartView;
