import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Home } from './HomePage';
import { About } from './About';
import { Login } from './LoginPg';
import { Blog } from "./Blog"
import { BlogP1 } from "./BlogPg1"
import { BlogP2 } from "./BlogPg2"
import { BlogP3 } from "./BlogPg3"
import { BlogP4 } from "./BlogPg4"
import { BlogP5 } from "./BlogPg5"
import { Dict } from './Dict';


import './index.css';

function App() {
  return (
    <Router basename="/Financtionary">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/BlogP1" element={<BlogP1 />} />
          <Route path="/BlogP2" element={<BlogP2 />} />
          <Route path="/BlogP3" element={<BlogP3 />} />
          <Route path="/BlogP4" element={<BlogP4 />} />
          <Route path="/BlogP5" element={<BlogP5 />} />
          <Route path="/Dict" element={<Dict />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
