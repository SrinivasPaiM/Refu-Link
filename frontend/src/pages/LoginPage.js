import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const validCredentials = {
      'amogh': 'lessgo123',
      'sinchana': 'sinch456',
      'tanisha': 'tani789',
      'srinivas': 'srini101'
    };

    if (validCredentials.hasOwnProperty(username) && validCredentials[username] === password) {
      navigate('/register');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleSignUp = () => {
    setShowPopup(true);
    setUsername('');
    setPassword('');
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome Back</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
          <button type="button" className="signup-button" onClick={handleSignUp}>SignUp</button>
        </form>
      </div>
      {showPopup && (
        <div className="popup-bottom">
          <div className="popup-content">
            <p>Details saved!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
