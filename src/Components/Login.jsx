import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import stackoverflow from '../images/stackoverflow logo.png'
const Login = () => {
    const nav=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[userdata,setUserdata]=useState([])
    const[token]=useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTYyZjA1NDZhMzhhZDU1MGIzMDUzZWEiLCJpYXQiOjE3MDA5ODI4ODd9.nySaJw0lmLD1_3PN1QtDXMBpAlnZlE68W7vGr_Z-py0")

    const headers={
        Authorization:token,
        "Content-type":"application/json"
    }
    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://capstone-login-backend.onrender.com/api/user/login",
                { email, password },
                { headers }
            );
            setUserdata([response.data]);
            console.log(response.data);
            if(response.status==200){
                alert("Login successfully")
                nav("/")
            }
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div style={{overflow:"hidden"}}>
            <div style={{position:"relative", left:"690px", top:"150px"}}><img style={{width:"70px",height:"70px"}} src={stackoverflow}></img></div>
            <form onSubmit={submit}>
                <div className='shadow p-3 mb-5 bg-grey rounded' style={{ border: "2px solid grey", marginTop: "150px", padding: "20px", width: "245px", marginLeft: "600px"}}>
                    <div><h5>Email</h5></div>
                    <div style={{ paddingBottom: "10px" }}><input type='text' value={email} style={{border:"2px solid blue", borderRadius:'2px'}} name="email" placeholder='Enter your e-mail' onChange={(e)=>setEmail(e.target.value)} /></div>
                    <div><h5>Password</h5></div>
                    <div style={{ paddingBottom: "15px" }}><input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{border:"2px solid blue", borderRadius:'2px'}} name="password" placeholder='Enter your password' /></div>
                    <div style={{ paddingBottom: "10px" }}><button type='submit' style={{ width: "188px",height:'35px', backgroundColor:"blue", border:"0", borderRadius:"2px", color:"white" }}>Login in</button></div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><button onClick={()=>nav("/register")} style={{border:"0px", backgroundColor:'white'}}>Register ?</button></div>
                </div>
            </form>
        </div>
    );
};

export default Login;