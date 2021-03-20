import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <div className="form-container">
                <h2>Login </h2>
                <form className="login-form">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                    </div>

                    <button type="button" class="btn btn-primary">Submit</button>

                    <p>Don't have an account? <Link to="/signup"> Create an account </Link>  </p>
                </form>
                <h3 className="text-center">Or</h3>
                <button className="btn btn-primary d-block m-auto">    <i className="fab fa-google"></i>  Continue with Google</button>
            </div>
            </div>
    );
};

export default Login;