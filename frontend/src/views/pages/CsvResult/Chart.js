import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Statistics",
    },
  },
};

export default function Chart({ datas }) {
  const labels = datas.data.map((d) => {
    return `${d.rangeStart}-${d.rangeEnd}`;
  });
  const data = {
    labels,
    datasets: [
      {
        label: datas.name,
        data: datas.data.map((d, i) => d.count),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div
      style={{
        height: "12rem",
        position: "relative",
        marginBottom: "1%",
        padding: "1%",
        width: "5rem",
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
}
