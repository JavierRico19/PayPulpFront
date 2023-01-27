import '../Styles/Login.css';
import logo from '../Assets/logo-blue.png';

export default function Login () {
    return(
        <div className='form'>
            <form>
                <img src={logo} width='70' height='70'/>
                <p className='p'>Email</p><input type='text' placeholder='Email Adress'/>
                <p className='p'>Password</p><input type='password' placeholder='Password'/><br/>
                <button onSubmit='' placeholder='Log In'>Log in</button>
            </form>
        </div>
    )
}