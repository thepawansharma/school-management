import React from "react";
import { Link } from "react-router-dom";

function Register() {

    const divStyle = {
        backgroundImage: "url('assets/img/background-illustration.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };

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
                                        <h2 className="head-bg text-white fw-50"><center>Sign Up</center></h2>
                                            <form action="">
                                                <div class="form-group">
                                                    <label >Username <span class="login-danger">*</span></label>
                                                    <input class="form-control login2-input my-4" type="text" />
                                                    <span class="profile-views"><i class="fas fa-user-circle"></i></span>
                                                </div>
                                                <div class="form-group">
                                                    <label >Email <span class="login-danger">*</span></label>
                                                    <input class="form-control login2-input my-4" type="text" />
                                                    <span class="profile-views"><i class="fas fa-envelope"></i></span>
                                                </div>
                                                <div class="form-group">
                                                    <label >Password <span class="login-danger">*</span></label>
                                                    <input class="form-control login2-input pass-input my-4" type="text" />
                                                    <span class="profile-views"><i class="fas fa-lock"></i></span>
                                                </div>
                                                <div class="form-group">
                                                    <label >Confirm password <span class="login-danger">*</span></label>
                                                    <input class="form-control login2-input pass-confirm my-4" type="text" />
                                                    <span class="profile-views"><i class="fas fa-lock"></i></span>
                                                </div>
                                            
                                                <div class="form-group mb-0">
                                                    <button class="btn btn-primary btn-block btn-lg p-2" type="submit">
                                                        <span style={{fontSize: '16px', color: '#ffffff', fontWeight: 'bold'}}>Register</span>
                                                    </button>
                                                </div>
                                            </form>
								
                                            <div className="login-or" style={{marginTop: '30px'}}>
                                                <span className="or-line"></span>
                                                <span className="span-or">or</span>
                                            </div>
                                
                                            <div className="social-login" style={{paddingTop: '10px'}}>
                                                <p className="account-subtitle text-center">Already have an account?
                                                    <Link to="/signin"> Sign In</Link>
                                                </p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="assets/js/feather.min.js"></script>
            </div>
        </>
    );
}
export default Register;