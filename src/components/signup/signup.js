import React from 'react';
import PropTypes from 'prop-types';
import styles from './signup.module.css';

const Signup = () => (
  <div className={styles.contentWrapper}>
      <div className={styles.container}>
        <forms>
          <h1>Signup</h1>
          <input type="Name" placeholder="Enter the name"/>
          <input type="UserId" placeholder="Enter the registered UserId"/>
          <input type="E-Mail" placeholder="Enter your Mail Id"/>
          <input type="Password" placeholder="Enter the password" />
          <input type="Password" placeholder="Retype the entered Password to confirm"/>
          
          <button>Register</button>
          <div className={styles.__container}>
            <a href="./login">Already having an account? Login</a>
          </div>
        </forms>
      </div>
    </div>
);

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;
