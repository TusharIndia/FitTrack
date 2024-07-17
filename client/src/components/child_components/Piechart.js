import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fit-track-api.vercel.app/api/workout/piechart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const data = await res.json();

      // Format the data for Chart.js
      const labels = [];
      const values = [];
      const colors = [];

      data.forEach((item) => {
        labels.push(item._id || "Unknown");
        values.push(item.count);
        colors.push(
          `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, 0.6)`
        );
      });

      setChartData({
        labels: labels,
        datasets: [
          {
            data: values,
            backgroundColor: colors,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return <Pie data={chartData} />;
};

export default PieChart;
