import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

function Dankmemes() {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let visitCount = [];
    let courseName = [];
    axios
      .get("https://mocki.io/v1/b7720d77-b8ce-4553-a775-df6f3cebf922")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          visitCount.push(parseInt(dataObj.employee_age));
          courseName.push(dataObj.employee_salary);
        }
        setChartData({
          labels: courseName,
          datasets: [
            {
              label: "level of thiccness",
              data: visitCount,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(courseName, visitCount);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>Dankmemes</h1>
      <div>
        <Doughnut
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

export default Dankmemes;
