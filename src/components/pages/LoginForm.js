import React, {useState} from 'react';
import './LoginForm.css';
import {Link} from 'react-router-dom';


/* 
Author: Mohithpoojary
Code: https://codepen.io/Mohuth/pen/QWgrPvp?editors=1100
*/

function LoginForm({Login, loginError}) {


  const [details, setDetails] = useState({username: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={submitHandler}>
          <h2>Login</h2>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>

              <input name="username" type="text" className="login__input" placeholder="Username" 
              onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>

            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>

              <input name="password" type="password" className="login__input" placeholder="Password"
              onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>

            </div>
            <p className='registerQuestion'><span className='register-prompt'>Need an account? </span><Link to='/register'>Register</Link></p>
            {(loginError != "") ? (<div className='login-error'>{loginError}</div>) : ""}
            <button className="button login__submit">
              <span className="button__text">Login</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>				
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>		
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>		
	    </div>
    </div>
  )
}

export default LoginForm;