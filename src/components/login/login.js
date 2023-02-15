import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
  <div className={styles.contentWrapper}>
      <div className={styles.container}>
        <forms>
          <h1>Login</h1>
          <input type="UserId" placeholder="Enter the registered UserId"/>
          <input type="Password" placeholder="Enter the password" />
  
          <button onClick={() => navigate("/feed")}>Login</button>
          <div className={styles.__container}>
            <a href="/forgot">Forgot Password?</a>
            <hr/>
            <a href="/signup">Don't have an account? Signup</a>
          </div>
        </forms>
      </div>
    </div>
);
  }
Login.propTypes = {};

Login.defaultProps = {};

export default Login;
