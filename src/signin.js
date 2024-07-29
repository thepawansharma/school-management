import React from 'react';
import { Link } from "react-router-dom";

function Signin() {

  const divStyle = {
    backgroundImage: "url('assets/img/background-illustration.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const handleClick=()=> {
    window.location.href='/main';
  }

  return (
        <>
            <div style={divStyle}>
                <div className="main-wrapper login-body">
                    <div className="login-wrapper">
                        <div className="container">
                            <div className="loginbox">
                                <div className="login-left">
                                    <img className="img-fluid" src="assets/img/login.png" alt="Logo" />
                                </div>
                                <div className="login-right">
                                    <div className="login-right-wrap">
                                        <h1 className="head-bg"><center>Welcome to School</center></h1>
                                        <br />
                                            <h2>Sign in</h2>
                                           
                                            <form style={{paddingTop: '20px'}}>
                                                <div className="form-group">
                                                    <label >Username <span className="login-danger">*</span></label>
                                                    <input className="form-control login2-input" type="text" value="" />
                                                        <span className="profile-views"><i className="fas fa-user-circle"></i></span>
                                                </div>
                                                <div className="form-group" style={{marginTop: '25px'}}>
                                                    <label >Password <span className="login-danger">*</span></label>
                                                    <input className="form-control pass-input login2-input" type="text" value="" />
                                                        <span className="profile-views"><i className="fas fa-lock"></i></span>
                                                </div>
                                                <div className="forgotpass">
                                                    <div className="remember-me">
                                                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> Remember me &nbsp;
                                                            <input type="checkbox" name="radio" value="" />
                                                        </label>
                                                    </div>
                                                    <a href="/">Forgot Password?</a>
                                                </div>
                                                <div className="form-group">
                                                    {/* <Link to="/main">Login</Link> */}
                                                    <button className="btn btn-primary btn-block btn-lg p-2" type='button' onClick={handleClick}>
                                                        <span style={{fontSize: '16px', color: '#ffffff', fontWeight: 'bold'}}>Login</span>
                                                    </button>
                                                </div>
                                            </form>

                                            <div className="login-or" style={{marginTop: '30px'}}>
                                                <span className="or-line"></span>
                                                <span className="span-or">or</span>
                                            </div>
                                
                                            <div className="social-login" style={{paddingTop: '10px'}}>
                                                <p className="account-subtitle text-center">Don't have an account?&nbsp;
                                                    <Link to="/register">Sign Up</Link>
                                                    {/* <a href="register.html"> Sign Up</a> */}
                                                </p>
                                            </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>

            </div>
        </>
  ); 
}

export default Signin;
