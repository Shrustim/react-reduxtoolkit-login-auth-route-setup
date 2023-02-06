import React,{useState,useEffect} from "react";
import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import Home from './pages/home';
import Profile from './pages/profile';
import Login from './pages/login';
import RequireAuth from "./components/requireAuth"
function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element= { <Login/>}/>
            <Route exact path="/login" element= { <Login/>}/>
            <Route path="/home" element={<RequireAuth><Home/></RequireAuth>} />
            <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>} />
            <Route path='*'  element={<Navigate to="/" />} />
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
