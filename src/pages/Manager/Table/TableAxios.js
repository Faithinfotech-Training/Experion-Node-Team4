// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Tab() {
//   const [posts, setposts] = useState();
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
//       console.log(res.data);
//       setposts(res.data);
//     });
//   }, []);
//   return (   <div>{
//     !posts ? ("no data found"):(
//       console.log("hi")
    
//             )
// }
// </div>)

// export default Tab;


// {/* 
// <table>
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>User Id</th>
//           <th>Page</th>
//           <th>Duration</th>

//         </tr>
//       </thead>
//       <tbody>
//    {
//           posts.map( post ,index)=>(
//               <tr key={index}>

//                 <td>{posts.id}</td>
//                 <td>{posts.userId}</td>

//                 <td>{posts.title}</td>
//                </tr>

//           ))
          
//       </tbody>
//     </table>

//   </div> */}