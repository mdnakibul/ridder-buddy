import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    name: displayName,
                    email: email,
                }
                setLoggedInUser(signedInUser)
                console.log(email, displayName);
                history.replace(from);
                console.log(result.user);
            }).catch((error) => {
                console.log(error.message);
            });
    }

    // Login Functinallity

    const handleSubmit = () => {
        const emailField = document.getElementById('email');
        const email = emailField.value;
        const passwordField = document.getElementById('password');
        const password = passwordField.value;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const { displayName, email } = userCredential.user;
                const signedInUser = {
                    name: displayName,
                    email: email,
                }
                setLoggedInUser(signedInUser)
                console.log(userCredential.user);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div className="container">
            <div className="form-container">
                <h2>Login </h2>
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" >Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

                    <p>Don't have an account? <Link to="/signup"> Create an account </Link>  </p>
                </form>
                <h3 className="text-center">Or</h3>
                <button className="btn btn-primary d-block m-auto" onClick={handleGoogleSignIn}>    <i className="fab fa-google"></i>  Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;