import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const nav=useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userdata, setUserdata] = useState([]);
    const [token] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTYyZjA1NDZhMzhhZDU1MGIzMDUzZWEiLCJpYXQiOjE3MDA5ODI4ODd9.nySaJw0lmLD1_3PN1QtDXMBpAlnZlE68W7vGr_Z-py0")

    const headers = {
        Authorization: token,
        "Content-type": "application/json",
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:4000/api/user/register",
                { username, email, password },
                { headers }
            );
            setUserdata([response.data]);
            console.log(response.data);
            if(response.status==200){
                alert("Registered succesfully")
                nav("/")
            }else if(response.data.message === "User already exists"){
                alert("User already exists")
            }
        } catch (err) {
            console.error(err);
            alert(err.response.data.message)
        }
    };
    return (
        <div>
            <form onSubmit={submit}>
                <div className='shadow p-3 mb-5 bg-grey rounded' style={{ border: "2px solid grey", marginTop: "200px", padding: "20px", width: "245px", marginLeft: "600px"}}>
                    <div><h5>Username</h5></div>
                    <div style={{ paddingBottom: "10px" }}><input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} style={{border:"2px solid blue", borderRadius:'2px'}} name="email" placeholder='Enter your name' /></div>
                    <div><h5>Email</h5></div>
                    <div style={{ paddingBottom: "10px" }}><input type='text' value={email} onChange={(e)=>setEmail(e.target.email)} style={{border:"2px solid blue", borderRadius:'2px'}} name="email" placeholder='Enter your e-mail' /></div>
                    <div><h5>Password</h5></div>
                    <div style={{ paddingBottom: "15px" }}><input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{border:"2px solid blue", borderRadius:'2px'}} name="password" placeholder='Enter your password' /></div>
                    <div style={{ paddingBottom: "10px" }}><button style={{ width: "188px",height:'35px', backgroundColor:"blue", border:"0", borderRadius:"2px", color:"white" }}>Sign in</button></div>
                </div>
            </form>
        </div>
    );
};

export default Register;