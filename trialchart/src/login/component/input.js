
import './css/input.css'

function InputBox({placeholder, type, value1, value2, onChange1, onChange2}) {

    return (
      <body>        
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
        </body>

      );
    }




export default InputBox;
