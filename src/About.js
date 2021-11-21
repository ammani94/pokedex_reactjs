//import './About.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
//import reportWebVitals from './reportWebVitals';


export default function About() {

  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);

  const handleEmailChange = event => {
    setEmail(event.target.value)
  };

  // const handlePasswordlChange = event => {
  //   setPassword(event.target.value)
  // };

  const handleSubmit = event => {
    event.preventDefault();

    const url = 'http://localhost:3001/api/stuff'
    //console.log(email)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_email:email, user_password:password })
    };
    fetch(url, requestOptions)
        .then(response => console.log('response',response))
        .catch(error => console.log('Form submit error', error))
  };

  return (
    <form onSubmit={handleSubmit}>
  <div>
    <label>Email address</label>
    <input
      type="email"
      name="email"
      placeholder="Enter email"
      onChange={handleEmailChange}
      value={email}
    />
    <input
      type="password"
      name="password"
      placeholder="Enter email"
      onChange={e => setPassword(e.target.value)}
      value={password}
    />
  </div>
  <button type="submit">
    Submit
  </button>
</form>
  );

}