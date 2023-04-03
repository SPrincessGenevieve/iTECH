import CheckBox from './component/checkbox';
import './component/css/index.css'
import ForgotPassBtn from './component/ForgotPassBtn';
import InputBox from './component/input';
import LoginBtn from './component/LoginBtn';
import bg from './component/css/background.png';


function Login({onClick}) {

    return (
      
        <body className='container' style={{backgroundImage: `url(${bg})`}}>
          <img className='logo' src={require('./../Images/logo.png')} />
          <div className='loginContainer'>
            
            <h5 className='signup'>Sign Up</h5>
            <div>
            <div className='UsernameContent'>
            <div className='iconUsername'>
            </div>
            <input onChange={onChange1} value={value1} id='username' type="text" placeholder="username" className='usernameInput'></input>
          </div>
          <div className='PasswordContent'>
            <div className='iconPassword'>
            </div>
            <input onChange={onChange2} value={value2} id='password' type="password" placeholder="password" className='passwordInput'></input>
          </div>
            </div>
            <div className='componentsLogin'>
              
            </div>
            <LoginBtn onClick={onClick}></LoginBtn>
            <ForgotPassBtn></ForgotPassBtn>
          </div>

        </body>
      );
    }




export default Login;
