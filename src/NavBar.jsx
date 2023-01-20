import React, { Fragment } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import logo from './Assets/Paypulp3.png';
import './Styles/NavBar.css';
import Home from './Home'
import Personal from './Personal';
import Business from './Business';
import Developer from './Developer';
import Help from './Help';

export default function NavBar(){

    return(
        <div>
            <nav>
                <div className='NavBar'>
                    <NavLink to=''>
                    <img src={logo} width='200' height='80'/>
                    </NavLink>
                    <NavLink to='/Personal'>
                        <span>Personal</span>
                    </NavLink>
                    <NavLink to='/Business'>
                        <span>Business</span>
                    </NavLink>
                    <NavLink to='/Developer'>
                        <span>Developer</span>
                    </NavLink>
                    <NavLink to='/Help'>
                        <span>Help</span>
                    </NavLink>
                </div>
            </nav>
            <Routes>
                <Route path='' element={<Home/>} />
                <Route path='Personal' element={<Personal/>} />
                <Route path='Business' element={<Business/>} />
                <Route path='Developer' element={<Developer/>} />
                <Route path='Help' element={<Help/>} />
            </Routes>
        </div>
    )
}