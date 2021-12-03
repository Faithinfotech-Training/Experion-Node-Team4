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
    let courseCount = [];
    let resourseCount = [];
    let resourceName = [];
    let courseName = [];
    axios
      .get("http://localhost:3009/courses")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          courseCount.push(parseInt(dataObj.visit));
          resourseCount.push(parseInt(dataObj.visit));

          courseName.push(dataObj.coursename);
          resourceName.push(dataObj.resourcename);
        }
        setChartData({
          labels: courseName,
          datasets: [
            {
              label: "Course Visit",
              data: courseCount,
              backgroundColor: "rgba(255, 2, 2, 1)",
            },

            {
              label: "Resource Visit",
              data: resourseCount,
              backgroundColor: "rgba(2, 2, 255, 1)",
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log("yaxis", yAxis);
    // console.log("xaxis", xAxis);
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
