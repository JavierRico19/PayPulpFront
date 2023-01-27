import photo from '../Assets/5._help_2.jpg';
import '../Styles/Help.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Q1 from './Questions/q1.jsx';
import Q2 from './Questions/q2.jsx';
import Q3 from './Questions/q3.jsx';
import Q4 from './Questions/q4.jsx';

export default function Help () {
    return(
        <div className='div'>
            <h1 className='title'>Common questions</h1>
            <div className='div2'>
            <p className='text1'>
            <NavLink to='/q1'>-Can I cancel a PayPulp payment?</NavLink><br/>
            <NavLink to='/q2'>-Can I change my PayPulp address to another country?</NavLink><br/>
            <NavLink to='/q3'>-How do I view or edit my PayPulp account information?</NavLink><br/>
            <NavLink to='/q4'>-How do I close my PayPulp account?</NavLink><br/> 
            </p>
            <img className='photo' width='600' height='400' src={photo}/>
            </div>
        <Routes>
            <Route exact path='q1'element={<Q1/>}/>
            <Route path='/q2'element={<Q2/>}/>
            <Route path='/q3'element={<Q3/>}/>
            <Route path='/q4'element={<Q4/>}/>
        </Routes>
        </div>
    )
}