import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';


const auth = getAuth(app);



const Login = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState(false);


    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);


        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
            form.reset();
        })
        .catch(error => {
            console.error('error', error);
        })
    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }
    const handleForgetPassword = () => {
        if(!userEmail){
            alert("Please enter your email address");
            return;
        }
        sendPasswordResetEmail(auth, userEmail )
        .then( () => {
            alert('Password Reset Email sent. Please check your email.')
        })
        .catch(error => {
            console.error('error', error);
        })
    }
    return (
        <div className='w-50 mx-auto '>
            <h3 className='text-success mb-5 mt-5 text-center'> Please Login !</h3>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                <input type="email" onBlur={handleEmailBlur} name='email' className="form-control" id="formGroupExampleInput" placeholder="Your Email" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your Password" required/>
            </div>
            <button type="submit" className="btn btn-primary" >Login</button>
            </form>
            {success && <p className='text-success text-center fw-bold'>Successfully Login!</p>}
            <p>New to this website? Please <Link to={'/register'}>Register</Link></p>
            <p>Forget Password? <button type="button" onClick={handleForgetPassword} className="btn btn-link">Reset</button></p>
        </div>
    );
};

export default Login;