import './q.css';
import photo from './5._help_2.jpg';


export default function Q2 () {
    return(
        <div className='div'>
            <h1 className='title'>Can I change my PayPulp address to another country?</h1>
            <div className='div2'>
            <p className='text1'>No. The laws applicable to PayPulp accounts differ by country, 
            so you can't change your address to a country that is different from the country you used when you opened your account. 
            If you're moving abroad, you’ll need to close your existing account and open a new account. 
            If you maintain residences in 2 countries, you can have 2 PayPulp accounts as long as only one is a Business account.
            </p>
            <img className='photo' width='600' height='400' src={photo}/>
            </div>
        </div>
    )
}