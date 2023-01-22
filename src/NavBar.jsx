import React, { Fragment } from 'react';
import { Routes, Route, NavLink, Router } from 'react-router-dom';
import logo from './Assets/Paypulp3.png';
import logo2 from './Assets/Paypulptr.png';
import './Styles/NavBar.css';
import Home from './Home'
import Personal from './Personal';
import Business from './Business';
import Developer from './Developer';
import Help from './Help';
import Login from './Login';
import Signup from './Signup';

export default function NavBar(){

    return(
        <div>
            <nav>
                <div className='NavBar'>
                    <NavLink to=''>
                    <img src={logo2} width='210' height='70'/>
                    </NavLink>
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
                    <NavLink to='/login'>
                        <button variant="outlined">Log In</button>
                    </NavLink>
                    <NavLink to='/signup'>
                        <button>Sign Up</button>
                    </NavLink>
                </div>
            </nav>
            <Routes>
                <Route path='' element={<Home/>} />
                <Route path='Personal' element={<Personal/>} />
                <Route path='Business' element={<Business/>} />
                <Route path='Developer' element={<Developer/>} />
                <Route path='Help' element={<Help/>} />
                <Route path='Login' element={<Login/>} />
                <Route path='Signup' element={<Signup/>} />
            </Routes>
        </div>
    )
}