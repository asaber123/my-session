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

  //setting a array that only saves the unique keys. 
  const allLabels = climbingRoutes?.map(x => x.grade)
  const uniqueLabels = [...new Set(allLabels)];

  //Counting how many of each uniqe grade there is.
  let countObj = {};
  let arr = [1, 2, 3, 1, 2, 3, 4];

  let countFunc = keys => {
    countObj[keys] = ++countObj[keys] || 1;
  }

  arr.forEach(countFunc);

  // const countPerGrade = new Set(climbingRoutes?.map(x => x.grade))
  // climbingRoutes.map(x => 
  //     countPerGrade[x.grade] = countPerGrade[x.grade] + 1
  //   )


  var data = {
    labels: uniqueLabels,
    datasets: [{
      label: `Total ascents by grade:`,
      data: [2, 3, 5, 6, 4],
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
