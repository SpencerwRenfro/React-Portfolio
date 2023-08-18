import React, {useState} from 'react';
// import logo from './logo.svg';
import './loginCSS.css'
import Register from './Register';
import LoginForm from './LoginForm';

function LoginBrain() {
  const [currentForm, setCurrentForm] =useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
    console.log(formName);
  }
  let loginHeading = 'Login';
  let registrationHeader = 'Register'

  return (
    <div className="card  ">
       {/* {
        currentForm === 'login' ? <h1 className="bg-red-300">{loginHeading}</h1> : <h1>{registrationHeader}</h1>
      }  */}
  
    <div className='App'>

      {
         currentForm === 'login' ?  <LoginForm onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    
  
    </div>
    </div>
  );
}

export default LoginBrain;
