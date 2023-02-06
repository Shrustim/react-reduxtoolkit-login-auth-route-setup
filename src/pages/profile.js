import React from 'react'
import {useSelector} from 'react-redux';
import { Link} from "react-router-dom";
function Profile() {
  const userData = useSelector((state)=>state.userData);
 
  return (
    <div>
        <h1>Profile</h1>
         Welcome {userData.userinfo.data.name} <br/>
         <Link to= "/home">  <button type="button">Home</button></Link>
    </div>
  )
}

export default Profile