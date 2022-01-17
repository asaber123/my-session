import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getRoutes } from '../../ApiClient';
import classes from '../../../styles/Layout.module.scss';


//Using Chart.js package to crate the charts. I have been using their tutorial on their website to set them up and been using fetched data to analyse the logs.

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

    //Getting the amount of times different grades is stored. 
  const labelsAndCounts = {}
  climbingRoutes?.map(x => {
    labelsAndCounts[x.grade] = (labelsAndCounts[x.grade] || 0) + 1
  })

  //Object.keys gives the unique variables. Object.values gives the amount of times the values are stored. 
  const data = {
    labels: Object.keys(labelsAndCounts),
    datasets: [{
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
      x: {
        display: true,
        title: {
          display: true,
          text: 'Total accents by grade',
          color: '#395B62',
          font: {
            size: 20,
            weight: 'bold',
          },
        }
      },
    legend: {
      labels: {
        fontSize: 25,
      },
    },

  }
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
