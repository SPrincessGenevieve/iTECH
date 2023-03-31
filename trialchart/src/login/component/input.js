
import './css/input.css'

function InputBox({placeholder, type}) {

    return (
      <body>        
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
        </body>

      );
    }




export default InputBox;
