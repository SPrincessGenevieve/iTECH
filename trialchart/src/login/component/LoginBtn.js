
import { useNavigate } from 'react-router-dom';
import './css/login.css'
import RouterPage from '../../routerPage';

function LoginBtn() {
  const navigation = useNavigate()

  function handleClick(){
    navigation("/dashboard")
  }

    return (
      <body > 
          <button className='login' onClick={handleClick}>Login</button>
    </body>

      );
    }




export default LoginBtn;
