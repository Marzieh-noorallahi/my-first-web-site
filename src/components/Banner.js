import React from 'react';
import styles from './Banner.module.css';
import banner from '../images/Banner.jpg';

const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="benner"></img>
      <div className={styles.textContainer}>
        <h1>React js</h1>
        <p>
          We are learning <span>React js</span>!
        </p>
      </div>
    </div>
  );
};

export default Banner;
