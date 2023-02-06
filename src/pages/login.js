import React,{useState,useEffect} from "react";
import {checkLogin} from '../Store/reducers/userReducer'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate,Link} from "react-router-dom";
import api from '../Helpers/axios'


function Login() {
    const dispatch = useDispatch()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading , setLoading] = useState(false);
    const [errorMessage , setErrorMessage] = useState("");
    const navigate = useNavigate();
    const onSubmit = async(e) => {
      e.preventDefault();
      setLoading(true)
     const payload ={
         "email":email,
         "password": password
     }
     const result = await api.post('/auth/login',payload);
     if(result.data.token){
       setErrorMessage("");
       await localStorage.setItem("token", result.data.token );
       await dispatch(checkLogin(result.data.token))
       window.location.href = "http://localhost:3000/home";
     }else{
      setErrorMessage("Invalid password or email!!! ");
     }
     setLoading(false)
         
    }
  return (
    <div>
        <h3>Login</h3>
        <div>
        <form action="/action_page.php">
            <label for="email">Email:</label><br/>
            <input type="text" id="email" name="email" onChange={(e) => { setEmail(e.target.value) }} value={email}/><br/>
            <label for="password">Password:</label><br/>
            <input type="text" id="password" name="password" onChange={(e) => { setPassword(e.target.value) }} value={password}/><br/>
            <label style={{color:"red"}}>{errorMessage}</label><br/>
            <input type="button" value={loading ? "Loading":"Submit"} onClick={(e) => onSubmit(e)}/> <br/>
          </form> 
          <Link to= "/home">  <button type="button">Home</button></Link>
        </div>
    </div>
  )
}

export default Login