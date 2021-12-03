import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let visits = [];
    let course = [];
    axios
      .get("https://mocki.io/v1/14750d73-3bef-40bf-a0d6-b12ced1e2f91")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.data) {
          visits.push(parseInt(dataObj.visit));
          course.push(dataObj.coursename);
        }
        setChartData({
          // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          labels: course,
          datasets: [
            {
              label: "# of Votes",
              data: visits,
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
    console.log(visits);
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
