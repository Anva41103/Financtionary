import { Home } from "./HomePage"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App

// import React from 'react';
// import { Blog } from "./Blog"
// import { Home } from "./HomePage"
// import { Outlet } from "react-router-dom"
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// function App() {

//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/Home">Home</Link>
//             </li>
//             <li>
//               <Link to="/Blog">About</Link>
//             </li>
//           </ul>
//         </nav>
//         <Outlet />
//       </div>
//     </Router>
//   )
// }

// export default App