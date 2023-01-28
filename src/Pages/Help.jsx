import photo from '../Assets/5._help_2.jpg';
import '../Styles/Help.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Help () {
    return(
        <div className='divh'>
            <h1 className='titleh'>Common questions</h1>
            <div className='divh1'>
            <Accordion className='Accordion' style={{

            }}>
                <AccordionSummary
                id='panel1-header'
                aria-controls='panel1-content'
                expandIcon={<ExpandMoreIcon/>}
                className='Accordion'
                >
                <Typography>Can i cancel PayPulp payments?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    1-Go to Activity.<br/>
                    2-Locate the pending payment.<br/>
                    3-Click Cancel.<br/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='Accordion'>
                <AccordionSummary
                id='panel2-header'
                aria-controls='panel2-content'
                expandIcon={<ExpandMoreIcon/>}
                >
                <Typography>Can I change my PayPulp address?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    No. The laws applicable to PayPulp accounts differ by country,<br/> 
                    so you can't change your address to a country that is different from the country you used when you opened your account.<br/>  
                    If you're moving abroad, you’ll need to close your existing account and open a new account.<br/>  
                    If you maintain residences in 2 countries, you can have 2 PayPulp accounts as long as only one is a Business account.<br/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='Accordion'>
                <AccordionSummary
                id='panel3-header'
                aria-controls='panel3-content'
                expandIcon={<ExpandMoreIcon/>}
                >
                <Typography>How do I edit my Paypulp account information?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    You can view and update personal details, such as mailing address, email address, phone number, 
                    or language from your account Settings.<br/>
                    To update your personal details:<br/>
                    1-Go to Settings.<br/>
                    2-Update your information clicking the + sign to add or edit your information. 
                    You can select your language from the language dropdown on the left side of the page.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='Accordion'>
                <AccordionSummary
                id='panel4-header'
                aria-controls='panel4-content'
                expandIcon={<ExpandMoreIcon/>}
                >
                <Typography>How do I close my PayPulp account?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    1-Click the Settings icon next to "Log out."<br/>
                    2-Click Close your account under "Account options."<br/>
                    3-Enter your bank account number if requested.<br/>
                    4-Click Close Account.<br/>
                    When you close your account any unpaid money requests are automatically canceled.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
    )
}