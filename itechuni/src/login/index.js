import CheckBox from './component/checkbox';
import './component/css/index.css'
import ForgotPassBtn from './component/ForgotPassBtn';
import InputBox from './component/input';
import LoginBtn from './component/LoginBtn';
import bg from './component/css/background.png';
import logo from './../Images/logo.png';


function Login({onClick}) {

    return (
      
        <body className='container' style={{backgroundImage: `url(${bg})`}}>
          <img className='logo' src={require('./../Images/logo.png')} />
          <div className='loginContainer'>
            
            <h5 className='signup'>Sign Up</h5>
            <InputBox ></InputBox> 
            <div className='componentsLogin'>
              
            </div>
            <LoginBtn onClick={onClick}></LoginBtn>
            <ForgotPassBtn></ForgotPassBtn>
          </div>

        </body>
      );
    }




export default Login;
