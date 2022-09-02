import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const chart = (props) => {
  const [graphData, setGraphData] = useState(props);

  useEffect(() => {
    setGraphData({
      algoName: props.dataToRender.algoName,
      inputSize: props.dataToRender.inputSize,
      timeTaken: props.dataToRender.timeTaken,
    });
  }, [props]);


  const data = {
    labels: props.dataToRender.inputSize,
    datasets: [
      {
        label: props.dataToRender.algoName,
        data: props.dataToRender.timeTaken,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        legend: {
          display: true,
          position: "bottom",
        },
        title: {
          display: true,
          text: "Time taken (ms)",
        },
      },
      x: {
        beginAtZero: true,
        legend: {
          display: true,
          position: "bottom",
        },
        title: {
          display: true,
          text: "Size of input",
        },
      },
    },
  };

  return (
    <div>
      <div className="container mt-8 w-[340px] sm:w-[700px] md:w-[680px] lg:w-[900px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default chart;
