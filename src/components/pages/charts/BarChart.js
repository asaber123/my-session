import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getRoutes } from '../../ApiClient';
import classes from '../../../styles/Layout.module.scss';


//Registaring the charts
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)


const BarChart = () => {
  const [climbingRoutes, setClimbingRoutes] = useState([]);
  //Use effect is going to run first time the page loads
  useEffect(async () => {
    getClimbingRoutes();
  }, []);
  //Function to get climbing routes fetched from rest-api
  const getClimbingRoutes = async () => {
    const routes = await getRoutes();
    setClimbingRoutes(routes)
  }

  const labelsAndCounts = {}
  climbingRoutes?.map(x => {
    labelsAndCounts[x.grade] = (labelsAndCounts[x.grade] || 0) + 1
  })

  const data = {
    labels: Object.keys(labelsAndCounts),
    datasets: [{
      label: `Total ascents by grade:`,
      data: Object.values(labelsAndCounts),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }


  return (
    <div>
      <Bar
        data={data}
        height={400}
        options={options}

      />
    </div>
  )
}



export default BarChart
