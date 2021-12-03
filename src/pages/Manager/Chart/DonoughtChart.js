import React, { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

const Chart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let details = [];
    let division = [];
    axios
      .get("https://mocki.io/v1/b7720d77-b8ce-4553-a775-df6f3cebf922")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.data) {
          details.push(parseInt(dataObj.employee_salary));
          division.push(parseInt(dataObj.employee_name));
        }
        setChartData({
          labels: division,
          datasets: [
            {
              label: "# of Votes",
              data: details,
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
    console.log(details);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <div>
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default Chart;
