import CheckBox from './component/checkbox';
import './component/css/index.css'
import ForgotPassBtn from './component/ForgotPassBtn';
import InputBox from './component/input';
import LoginBtn from './component/LoginBtn';
import bg from './component/css/background.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigation = useNavigate()

  function handleClick(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
      alert('Please provide both username and password');
    } else if (username === 'admin' && password === 'admin') {
      navigation("/dashboard");
    } else {
      alert('Incorrect username or password');
    }
  }

    return (
      
        <body className='container' style={{backgroundImage: `url(${bg})`}}>
          <img className='logo' src={require('./../Images/logo.png')} />
          <div className='loginContainer'>
            
            <h5 className='signup'>Sign Up</h5>
            <div>
            <div className='UsernameContent'>
            <div className='iconUsername'>
            </div>
            <input id='username' type="text" placeholder="username" className='usernameInput'></input>
          </div>
          <div className='PasswordContent'>
            <div className='iconPassword'>
            </div>
            <input id='password' type="password" placeholder="password" className='passwordInput'></input>
          </div>
            </div>
            <div className='componentsLogin'>
              
            </div>
            <LoginBtn onclick={handleClick}></LoginBtn>
          </div>

        </body>
      );
    }




export default Login;
