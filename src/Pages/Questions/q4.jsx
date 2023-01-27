import './q.css';
import photo from './5._help_2.jpg';


export default function Q4 () {
    return(
        <div className='div'>
            <h1 className='title'>How do I close my PayPulp account?</h1>
            <div className='div2'>
            <p className='text1'>Please reconsider! If there's a chance that you might want to use PayPulp in the future, 
            it's a good idea to keep your account open. <br/>
            Here's how to close your PayPulp account:<br/>
            1-Click the Settings icon next to "Log out."<br/>
            2-Click Close your account under "Account options."<br/>
            3-Enter your bank account number if requested.<br/>
            4-Click Close Account.<br/>
            When you close your account any unpaid money requests are automatically canceled.
            </p>
            <img className='photo' width='600' height='400' src={photo}/>
            </div>
        </div>
    )
}