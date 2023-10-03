import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
import { Link } from 'react-router-dom';




const auth = getAuth(app);

const RegisterReactbootstrap = () => {

    const [passwordError, setPasswordError] = useState('')

    const [success, setSuccess] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const name = form.name.value;
        const email = (form.email.value);
        const password = form.password.value;
        console.log(name, email, password);
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Please provide at least two uppercase');
            return;
        }
        if(password.length < 6){
            setPasswordError('Please provide at least 6 characters');
            return;
        }
        if(!/(?=.*[!@#$%&*])/.test(password)){
            setPasswordError('Please add at least one special character');
            return;
        }
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
            form.reset();
            varifyEmail();
            updateUserName(name);
        })
        .catch((error) => {
            console.log('error', error);
            setPasswordError(error.message);
        })
    }

    const varifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then( () => {
            alert('Please check your email and verify.');
        })
    }

    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then( () => {
                console.log('display name updated!')
            })
            .catch(error => {
                console.error('error', error);
            })

        
    }   





    return (
        <div className='w-50 mx-auto'>
                <h3 className='text-primary text-center mb-5 mt-5'>Please Register!!!</h3>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"  required/>
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {success && <p className='text-success'>User Created Successfully</p> }
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Alreaday have an account? Please <Link to={'/login'}>Login</Link></p>

        </div>
    );
};

export default RegisterReactbootstrap;