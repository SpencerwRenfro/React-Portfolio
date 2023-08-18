import React, { useState } from 'react';

export default function Register(props) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="auth-form-container card w-96 bg-zinc-900 text-zinc-200 shadow-xl">
            <h2>Register</h2>
            <form className="registration-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input className='text-zinc-900 bg-zinc-200' value={name}  onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder='full name'/>
         
                <label htmlFor="email">email</label>
                <input className='text-zinc-900 bg-zinc-200' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="email">password</label>
                <input className='text-zinc-900 bg-zinc-200' value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*************" id="password" name="password" />
                <button type="submit" className="btn my-3">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}