import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";
import Chart from "./Chart/Chart";
import BarChartScreen from "./Chart/ChartApi";

function SitesVisitsChartView() {
  return (
    <div>
      <div>
        <ManagerDashboard />
      </div>
      <div>
        <Chart />
      </div>
      <div>
        <BarChartScreen />
      </div>
    </div>
  );
}

export default SitesVisitsChartView;
