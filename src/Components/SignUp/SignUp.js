import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';

const SignUp = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
let history = useHistory()
    const handleSignUp = () => {
        const nameField = document.getElementById('name');
        const usersName = nameField.value;
        const isNameValid = usersName.length >= 3;
        const emailField = document.getElementById('email');
        const email = emailField.value;
        const passwordField = document.getElementById('password');
        const password = passwordField.value;
        const confirmPassField = document.getElementById('confirmpass');
        const confirmPass = confirmPassField.value;
        const isPassMatch = password === confirmPass;
        const isPassPaternValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
        const isPasswordValid = isPassMatch && isPassPaternValid;
        if(isNameValid && isPasswordValid){
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var userInfo = userCredential.user;
                console.log('User Created', userInfo)
                updateUserName(usersName);
                history.push('/login')
                // ...
            })
            .catch((error) => {
                console.log(error.message);
            });
        }else{
           if(!isNameValid){
               alert('Your User Name is invalid. It should contain at least 3 character')
           }else if(!isPassPaternValid){
               alert('Password is not valid. Password should have at least 8 character , one number, one letter');
           }else if(!isPassMatch){
            alert('Password and confirm password does not match')
           }
        }
    }

    const updateUserName = name => {
        var user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name,
        }).then(function () {
          // Update successful.
          console.log('User name updated successfully');
        }).catch(function (error) {
          // An error happened.
          console.log(error);
        });
      }
    return (
        <div className="container">
            <div className="form-container">
                <h2>Sign Up</h2>
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="Name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmpass" placeholder="Confirm Password" />
                    </div>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={handleSignUp}>Submit</button>

                    <p>Already have an account? <Link to="/login"> Login </Link>  </p>

                    <h3 className="text-center">Or</h3>
                    <button className="btn btn-primary d-block m-auto">    <i className="fab fa-google"></i>  Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;