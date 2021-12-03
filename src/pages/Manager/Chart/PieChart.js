import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
import axios from "axios";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
// import "./Chart.css";

const PieChart = () => {
  const [chartData, setChartData] = useState({});
  // const [employeeSalary, setEmployeeSalary] = useState([]);
  // const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get("https://mocki.io/v1/b7720d77-b8ce-4553-a775-df6f3cebf922")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_name));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "# of Votes",
              data: empSal,
              backgroundColor: [
                "rgba(255, 12,33, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(empSal, empAge);
    console.log(empSal);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <div>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
