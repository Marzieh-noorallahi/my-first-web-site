import React from 'react';
import styles from "./Logos.module.css"
import bird from "../images/Bird.jpg"
import flower from "../images/Flower.jpg"
import phone from "../images/Phone.jpg"

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Some Of Our Good Photos ...</h3>
            <div>
                <img src={bird} alt="bird"/>
                <img src={flower} alt="flower"/>
                <img src={phone} alt="phone"/>
            </div>
            
        </div>
    );
};

export default Logos;