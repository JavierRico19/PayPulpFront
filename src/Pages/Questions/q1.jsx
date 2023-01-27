import './q.css';
import photo from './5._help_2.jpg';


export default function Q1 () {
    return(
        <div className='div'>
            <h1 className='title'>Can I cancel a PayPulp payment?</h1>
            <div className='div2'>
            <p className='text1'>Some payments can be cancelled while others cannot.
            You may only cancel a payment in your 'Pending' payments which shows as unclaimed. These payments are displayed with a ‘Cancel’ button alongside.<br/>
            PayPulp can help your company to simplify his working.
            Millions of companies trust PayPulp to accept and make payments securely. We are here to help make it as easy as possible.<br/>
            1-Go to Activity.<br/>
            2-Locate the pending payment.<br/>
            3-Click Cancel.<br/>
            4-On the next page click Cancel Payment. (If a payment is Completed this means the money has already reached the other party, so it can’t be cancelled.)<br/>
            </p>
            <img className='photo' width='600' height='400' src={photo}/>
            </div>
        </div>
    )
}