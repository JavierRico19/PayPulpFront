import './q.css';
import photo from './5._help_2.jpg';


export default function Q3 () {
    return(
        <div className='div'>
            <h1 className='title'>How do I view or edit my Paypulp account information?</h1>
            <div className='div2'>
            <p className='text1'>You can view and update personal details, such as mailing address, email address, phone number, 
            or language from your account Settings.<br/>
            To update your personal details:<br/>
            1-Go to Settings.<br/>
            2-Update your information clicking the + sign to add or edit your information. 
            You can select your language from the language dropdown on the left side of the page.
            </p>
            <img className='photo' width='600' height='400' src={photo}/>
            </div>
        </div>
    )
}