import React, {useState} from 'react';
import './RegisterForm.css';
import {Link} from 'react-router-dom';

/* 
Author: Mohithpoojary
Code: https://codepen.io/Mohuth/pen/QWgrPvp?editors=1100
*/

function RegisterForm({Register, registerError}) {
  const [details, setDetails] = useState({username: "", password: "", password2: ""});

  const submitHandler = e => {
    e.preventDefault();
    Register(details);
  }

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="register" onSubmit={submitHandler}>
              <h2>Register</h2>
            <div className="register__field">
              <i className="register__icon fas fa-user"></i>
              <input name="username" type="text" className="register__input" placeholder="Username" 
              onChange={e => setDetails({...details, username: e.target.value})} value={details.username} required/>

            </div>
            <div className="register__field">
              <i className="register__icon fas fa-lock"></i>
              <input name="password" type="password" className="register__input" placeholder="Password"
              onChange={e => setDetails({...details, password: e.target.value})} value={details.password} required/>

            </div>

            <div className="register__field">
              <i className="register__icon fas fa-lock"></i>
              <input name="password2" type="password" className="register__input" placeholder="Confirm Password"
              onChange={e => setDetails({...details, password2: e.target.value})} value={details.password2} required/>

            </div>

            <Link to='/login'>Already have an account?</Link>

            {(registerError != "") ? (<div className='register-error'>{registerError}</div>) : ""}

            <button className="button register__submit">
              <span className="button__text">Register</span>
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

export default RegisterForm;