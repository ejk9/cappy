import React, {useState} from 'react';
import './LoginForm.css';
import {Link} from 'react-router-dom';


/* 
Author: Mohithpoojary
Code: https://codepen.io/Mohuth/pen/QWgrPvp?editors=1100
*/

function RegisterForm({Register, error}) {
  // $('#signup').on('click', function(e){
  //     e.preventDefault();
  //     $('#error').text("");
  //     var temp = $('#passWord').val().length;

  //     if(temp < 8){
  //         $('#error').append("Password Not Long Enough\<br\>");
  //         $('#passWord').val("");
  //         allow = false;
  //     }

  //     if($('#userName').val().length < 3){
  //         $('#error').append("Username Not Long Enough");
  //         $('#passWord').val("");
  //         allow = false;
  //     }
  //     var temp = "~@";
  //     temp += $('#userName').val();

  //     gun.get(temp).once(function(ack){ 
  //         if(ack == null && allow){
  //             user.create($('#userName').val(), $('#passWord').val(), function(ack){
  //                 //console.log($('#userName').val());
  //                 name = $('#userName').val();
  //                 window.location.href = "login.html";

  //             });
  //         }else{
  //             $('#error').text("");
  //             $('#error').append("Username already exists!");
  //             $('#passWord').val("");
  //             $('#userName').val("");
  //         }
  //     })
  // });

  const [details, setDetails] = useState({username: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    Register(details);
  }

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="register" onSubmit={submitHandler}>
            <div className="register__field">
              <i className="register__icon fas fa-user"></i>

              <input name="username" type="text" className="register__input" placeholder="Username" 
              onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>

            </div>
            <div className="register__field">
              <i className="register__icon fas fa-lock"></i>

              <input name="password" type="password" className="register__input" placeholder="Password"
              onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>

            </div>
            <Link to='/register'>Register</Link>
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