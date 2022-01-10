// import React, { useState, useEffect } from 'react';
// //import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
// import { Scatter } from 'react-chartjs-2';
// import { getRoutes } from '../../ApiClient';
// import classes from '../../../styles/Layout.module.scss';


// // //Registaring the charts
// // ChartJS.register(
// //     CategoryScale,
// //     LinearScale,
// //     BarElement
// // )


// const ScatterGraph = () => {
//     const [climbingRoutes, setClimbingRoutes] = useState([]);
//     //Use effect is going to run first time the page loads
//     useEffect(async () => {
//         getClimbingRoutes();
//     }, []);
//     //Function to get climbing routes fetched from rest-api
//     const getClimbingRoutes = async () => {
//         const routes = await getRoutes();
//         setClimbingRoutes(routes)
//     }


//     var scatterChart = ()=> {
//         setClimbingRoutes({
//                 labels:'Data Penduduk',
//                 datasets:[
//                   {
//                     label:'Provinsi A',
//                     data:[{x:2,y:4},{x:1,y:4},{x:2,y:3},{x:5,y:4},{x:5,y:3}],
//                     backgroundColor:'#000000'
//                   },
//                   {
//                     label:'Provinsi B',
//                     data:[{x:3,y:4},{x:1,y:3},{x:5,y:3},{x:5,y:7},{x:5,y:1}],
//                     backgroundColor:'#FFCCCC'
//                   }
//                 ]
//               })
//             }
//             useEffect(()=>{
//                 scatterChart();
//               },[]);
       
//     return (
//         <div>
//             <Scatter 
//         data={setClimbingRoutes}
//         height={300}
//         width={600}
//         options={{
//           responsive:false,
//           maintainAspectRatio:true
//         }}
//       />
//         </div>
//     )
// }



// export default ScatterGraph
