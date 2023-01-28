import React, { Fragment } from 'react';
import { Routes, Route, NavLink, Router } from 'react-router-dom';
import logo from '../Assets/Paypulptr.png';
import '../Styles/NavBar.css';
import Home from '../Pages/Home'
import Personal from '../Pages/Personal';
import Business from '../Pages/Business';
import Developer from '../Pages/Developer';
import Help from '../Pages/Help';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

export default function NavBar() {

    return (
        <div>
            <nav>
                <div className='NavBar'>
                    <div className='logo'>
                    <NavLink to=''>
                        <img src={logo} width='210' height='70' />
                    </NavLink>
                    </div>
                    <div className='navboth'>
                        <div className='nav1'>
                            <NavLink to='/personal'>
                                <span>Personal</span>
                            </NavLink>
                            <NavLink to='/business'>
                                <span>Business</span>
                            </NavLink>
                            <NavLink to='/developer'>
                                <span>Developer</span>
                            </NavLink>
                            <NavLink to='/help'>
                                <span>Help</span>
                            </NavLink>
                        </div>
                        <div className='nav2'>
                            <NavLink to='/login'>
                                <button className='button1' variant="outlined">Log In</button>
                            </NavLink>
                            <NavLink to='/signup'>
                                <button>Sign Up</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='Personal' element={<Personal />} />
                <Route path='Business' element={<Business />} />
                <Route path='Developer' element={<Developer />} />
                <Route path='Help' element={<Help />} />
                <Route path='Login' element={<Login />} />
                <Route path='Signup' element={<Signup />} />
            </Routes>
        </div>
    )
}