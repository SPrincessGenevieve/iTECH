
import { useNavigate } from 'react-router-dom';
import './css/login.css'
import RouterPage from '../../routerPage';

function LoginBtn({onclick}) {
  const navigation = useNavigate()

  function handleClick(){
    navigation("/dashboard")
  }

    return (
      <body > 
          <button className='login' onClick={onclick}>Login</button>
    </body>

      );
    }




export default LoginBtn;
