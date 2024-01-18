import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import stackoverflow from '../images/stackoverflow logo.png'
const Register = () => {
    const [username, setUsername] = useState("");
    const nav = useNavigate()
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
                "https://capstone-login-backend.onrender.com/api/user/register",
                { username, email, password },
                { headers }
            );
            setUserdata([response.data]);
            console.log(response.data);
            if (response.status == 200) {
                alert("Registered succesfully")
                nav("/")
            } else if (response.data.message === "User already exists") {
                alert("User already exists")
            }
        } catch (err) {
            console.error(err);
            alert(err.response.data.message)
        }
    };
    return (
        <div style={{ overflow: "hidden" }}>
            <div style={{display:"flex", padding:"px30"}}>
                <div style={{position:"relative", top:"220px", paddingLeft:"250px"}} >
                    <div style={{ height: "40px" }}><h4>Join the Stack Overflow Community</h4></div>
                    <div><h5>Get unstuck -- ask a question</h5></div>
                    <div><h5>Unlock new privileges like voting and commenting</h5></div>
                    <div><h5>Save your favorite tags, filters and jobs</h5></div>
                    <div><h5>Earn reputations and badges</h5></div>
                    <div><h5 className="text-black-50">Collaborate and share knowledge with a private group for</h5></div>
                    <div><h5 className="text-primary">Get Stack Overflow for Teams free up to 50 users</h5></div>
                </div>
                <div>
                <div style={{ position: "relative", left: "190px", top: "130px" }}><img style={{ width: "70px", height: "70px" }} src={stackoverflow}></img></div>
                <form onSubmit={submit}>
                    <div className='shadow p-3 mb-5 bg-grey rounded' style={{ border: "2px solid grey", marginTop: "130px", padding: "20px", width: "245px", marginLeft: "100px" }}>
                        <div><h5>Username</h5></div>
                        <div style={{ paddingBottom: "10px" }}><input type='text' value={username} onChange={(e) => setUsername(e.target.value)} style={{ border: "2px solid blue", borderRadius: '2px' }} name="email" placeholder='Enter your name' /></div>
                        <div><h5>Email</h5></div>
                        <div style={{ paddingBottom: "10px" }}><input type='text' value={email} onChange={(e) => setEmail(e.target.email)} style={{ border: "2px solid blue", borderRadius: '2px' }} name="email" placeholder='Enter your e-mail' /></div>
                        <div><h5>Password</h5></div>
                        <div style={{ paddingBottom: "15px" }}><input type='password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ border: "2px solid blue", borderRadius: '2px' }} name="password" placeholder='Enter your password' /></div>
                        <div style={{ paddingBottom: "10px" }}><button style={{ width: "188px", height: '35px', backgroundColor: "blue", border: "0", borderRadius: "2px", color: "white" }}>Sign in</button></div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Register;