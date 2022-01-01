//import React, { useState, useEffect } from 'react';


// const Table = () => {


//     const [climbingRoutes, setClimbingRoutes] = useState([]);
//     //Use effect is going to run first time the page loads
//     useEffect(async () => {
//         getClimbingRoutes();
//     }, []);
//     //Function to get climbing routes fetched from rest-api
//     const getClimbingRoutes = async () => {
//         const response = await fetch(`http://localhost:3001/routes/`);
//         const data = await response.json();
//         setClimbingRoutes(data);
//         const amoutOfRoutes = response.count({grade: '7'});
//         console.log(amoutOfRoutes);
//     }

//     //Creating a function that sort and calculate how many climbing routes the user has done



//     const table = climbingRoutes.map((climbingRoutes => {
//         return (
//             <div>

//             </div>
//         )
//     }));

//     return (
//         <div>
//             {table}
//         </div>
//     )

// }

// export default Table