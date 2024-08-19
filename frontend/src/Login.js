import React, { useState } from 'react';
import './css/App.css';
import Cookies from 'js-cookie';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
    props.setUser(email);
    Cookies.set('user', email, { expires: 7, });
  };

  return (
    <div className='container login-page'>
        <h3 className='text-center'>Login</h3>
    <form onSubmit={handleSubmit} className='login-form'>
      <div>
        <label>Email</label><br></br>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label><br></br>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='flexer'>
      <button className='btn-login' type="submit">Login</button>
      </div>
      
    </form>
    </div>

  );
}

export default LoginForm;