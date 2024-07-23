import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let userdata = {
            email,
            password
        };
        axios.post('https://reqres.in/api/login', userdata).then((res) => {
            let tokenfromrequres = res.data.token;
            localStorage.setItem('token', tokenfromrequres);
            alert('Login successfully');
        })
        .catch((err) => {
            console.log(err);
            alert('Login failed');
        });
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Logout successfully');
    };

    return (
        <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <style>
                {`
                    .login-form {
                        display: flex;
                        margin-top: 50px;
                        flex-direction: column;
                        align-items: center;
                        background-color: #f0f0f0;
                        padding: 60px;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    .login-form input[type="text"],
                    .login-form input[type="email"],
                    .login-form input[type="password"] {
                        background-color: teal;
                        color: white;
                        border: 1px solid white;
                        padding: 10px;
                        margin: 10px 0;
                        width: 200px;
                        border-radius: 5px;
                    }
                    .login-form input[type="text"]::placeholder,
                    .login-form input[type="email"]::placeholder,
                    .login-form input[type="password"]::placeholder {
                        color: white;
                    }
                    .login-form input[type="submit"] {
                        background-color: teal;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        cursor: pointer;
                        border-radius: 5px;
                        margin-top: 10px;
                    }
                    .login-form input[type="submit"]:hover {
                        background-color: darkslategray;
                    }
                    .login-form button {
                        background-color: teal;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        cursor: pointer;
                        border-radius: 5px;
                        margin-top: 10px;
                    }
                    .login-form button:hover {
                        background-color: darkslategray;
                    }
                `}
            </style>
            <h1 style={{ color: 'black', textAlign: 'center' }}>Login Page</h1>
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password' />
                <input type="submit" value="Login" style={{ width: '100px' }} />
                <button type="button" onClick={handleLogout} style={{ marginTop: '10px' }}>Logout</button>
            </form>
        </div>
    );
};

export default Login;
