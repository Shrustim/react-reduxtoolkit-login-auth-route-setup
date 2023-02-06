import React from 'react'
import {useSelector} from 'react-redux'
import { Link} from "react-router-dom";
function Home() {
  const userData = useSelector((state)=>state.userData);
  const logout = () =>{
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
  }
  return (
    <div>
        <h1>Home</h1>
         Welcome {userData.userinfo.data.name} <br/>
        <button type="button" onClick={logout}>logout</button>
        <br/>
        <Link to= "/profile">  <button type="button">Profile</button></Link>
    </div>
  )
}

export default Home