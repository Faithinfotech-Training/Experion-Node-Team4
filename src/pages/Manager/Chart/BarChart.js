import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const BarChart = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    let yAxis = [];
    let xAxis = [];
    axios
      .get("http://localhost:3009/courses")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          yAxis.push(parseInt(dataObj.visit));
          xAxis.push(dataObj.coursename);
        }
        setChartData({
          // labels: [
          //   "Course 1",
          //   "Course 2",
          //   "Course 3",
          //   "Course 4",
          //   "Course 5",
          //   "Course 6",
          // ],
          labels: xAxis,

          datasets: [
            {
              label: "Site Visit",
              data: yAxis,
              backgroundColor: "rgba(255, 32, 32, 1)",
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("yaxis", yAxis);
    console.log("xaxis", xAxis);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <div>
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};

export default BarChart;
