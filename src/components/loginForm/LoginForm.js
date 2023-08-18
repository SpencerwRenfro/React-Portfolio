import React, { useState } from 'react';

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

    }

    return (
         <div className="auth-form-container card w-96  shadow-xl bg-zinc-900 text-zinc-200">



               <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input className='text-zinc-900 bg-zinc-200' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input className='text-zinc-900 bg-zinc-200' value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*************" id="password" name="password"/>
            <button type="submit" className="btn my-3">Log in</button>        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div> 
    )
}