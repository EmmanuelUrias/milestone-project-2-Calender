import React, { useState } from 'react'


export const Register = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    
    
        useEffect(()=> {
        const postData = aysnc () => {
             fetch('http://localhost:4002/api/users/')
                .then(response => response.json())
                .then(newAccount => {
                    body: JSON.stringify({a: null, b: 'email', c: 'pass'})
                } )
            
        }
        postData()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }


    return (
        <>
        <form method='POST' action='/' onSubmit={handleSubmit}>
            <label htmlFor='email'> Email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type= 'email' placeholder="youremail@email.com" id="user_email" name="email"/>
            <label htmlFor='password'> Password </label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type= 'password' placeholder="****" id="user_password" name="password"/>
            <button> Create Account </button>
        </form>
            <button onClick={() => props.onFormSwitch('login')}> Already have an account? Log in here! </button>
        </>
        
    )
    
}