import React from 'react';
import styles from './Forgot.module.css';

const Forgot = () => (
  <div className={styles.contentWrapper}>
      <div className={styles.container}>
        <forms>
          <h1>Forgot Password</h1>
          <input type="E-mail" placeholder="Enter the registered E-Mail Id"/>
          <input type="password" placeholder="Enter the new Password" />
          <input type="password" placeholder="Re-enter the new password to confirm" />

          <button>Save</button>
          <div className={styles.__container}>
            <a href="./login">Back to login page || Login</a>
          </div>
        </forms>
      </div>
    </div>
);


Forgot.defaultProps = {};

export default Forgot;
