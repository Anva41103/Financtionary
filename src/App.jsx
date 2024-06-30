import React from 'react';
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
// import { Home } from "./HomePage"
// import { About } from './About'
// import { Login } from './LoginPg'
// import { Blog } from "./Blog"
// import { BlogP1 } from "./BlogPg1"
// import { BlogP2 } from "./BlogPg2"
// import { BlogP3 } from "./BlogPg3"
// import { BlogP4 } from "./BlogPg4"
// import { BlogP5 } from "./BlogPg5"
// import { Dict } from "./Dict"
// import { Outlet } from "react-router-dom"
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// // import { Home } from './HomePage'
// // import { About } from './About'
// // import { Login } from './LoginPg'
// // import { Blog } from "./Blog"
// // import { BlogP1 } from "./BlogPg1"
// // import { BlogP2 } from "./BlogPg2"
// // import { BlogP3 } from "./BlogPg3"
// // import { BlogP4 } from "./BlogPg4"
// // import { BlogP5 } from "./BlogPg5"
// // import { Dict } from "./Dict"

// function App() {

//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//           <li>
//               <Link to='/Home'>Home</Link>
//             </li>
//             <li>
//               <Link to="/Blog">Blog</Link>
//             </li>
//             <li>
//               <Link to="/Login">Login</Link>
//             </li>
//             <li>
//               <Link to="/About">About</Link>
//             </li>
//             <li>
//               <Link to="/Dict">Dict</Link>
//             </li>
//             <li>
//               <Link to="/BlogP1">BlogP1</Link>
//             </li>
//             <li>
//               <Link to="/BlogP2">BlogP2</Link>
//             </li>
//             <li>
//               <Link to="/BlogP3">BlogP3</Link>
//             </li>
//             <li>
//               <Link to="/BlogP4">BlogP4</Link>
//             </li>
//             <li>
//               <Link to="/BlogP5">BlogP5</Link>
//             </li>
//           </ul>
//         </nav>
//         <Outlet />
//       </div>
//     </Router>
//   )
// }

// export default App