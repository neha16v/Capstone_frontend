import React, { useState } from 'react';
import logo from '../images/logo.png'
import search from '../images/search.png'
import user from '../images/user.png'
import './Navbar.css'
import { Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const nav = useNavigate()
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [find,setFind] = useState("")
    const logout = () => {
        setLoggedIn(true);
    };
    return (
        <div>
            <div className='navbar'>
                <div className='d-flex' style={{ gap: "85px" }}>
                    <div>
                        <img onClick={() => nav("/")} src={logo} className='logo'></img>
                    </div>
                    <div><button className='button'><h5>About</h5></button></div>
                    <div><button className='button'><h5>Products</h5></button></div>
                    <div><button className='button'><h5>For Teams</h5></button></div>
                    <form onChange={(e)=>setFind(e.target.value)}>
                        <div><button className='search' type='submit'><img src={search} className='searchimg' ></img></button><input type='text' className='searchtext' placeholder='Search...' style={{ width: "300px" }} /></div>
                    </form>
                    {isLoggedIn ? (
                        <div>
                            <button className='loginbutton' onClick={() => nav("/login")}><h5>Login in</h5></button>
                        </div>

                    ) : (
                        <div className='d-flex'>
                            <div><img src={user} className='user-avatar' alt="User Avatar" /></div>
                            <div>
                                <Nav>
                                    <NavDropdown>
                                        <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;