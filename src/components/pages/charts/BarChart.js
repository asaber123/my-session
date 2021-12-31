import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

//Registaring the charts
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)


const BarChart = () => {

    // //Getting data from rest-api
    // const [chart, setChart] = useState([]);
    // //Use effect is going to run first time the page loads
    // useEffect(async () => {
    //     const fetchClimbingRoutes = async () => {
    //         await fetch(`http://localhost:3001/routes/`, {
    //             method: 'GET',
    //             headers:{
    //                 'Content-Type' : 'application/json',
    //                 'Access-Control-Allowed-Origin' : '*'
    //             }
    //         }).then((response) =>{
    //             response.json().then((json) =>{
    //                 console.log(json)
    //                 setChart(json.data)
    //             })
    //         }).catch(error=>{
    //             console.log(error)
    //         })
    //     }
    //     fetchClimbingRoutes()
    // }, [`http://localhost:3001/routes/`]);

    const [climbingRoutes, setClimbingRoutes] = useState([]);
    //Use effect is going to run first time the page loads
    useEffect(async () => {
        getClimbingRoutes();
    }, []);
    //Function to get climbing routes fetched from rest-api
    const getClimbingRoutes = async () => {
        const response = await fetch(`http://localhost:3001/routes/`);
        const data = await response.json();
        setClimbingRoutes(data)
    }
    const charts = climbingRoutes.map((climbingRoutes => {
        return (
            <div>
                <Bar
                    data={{
                        labels: climbingRoutes.grade,
                        datasets: [{
                            label: 'Total ascents by grade',
                            data: [12, 19, 3, 5, 2, 3],
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

                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                    }}

                />
            </div>
        )
    }));

    return (
        <div>
            {charts}
        </div>
    )

}

export default BarChart
