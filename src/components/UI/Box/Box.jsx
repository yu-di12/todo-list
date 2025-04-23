import React from "react";
import styles from './Box.module.css';

const Box = ({logo, name}) => {

  return (
    <div className={styles.boxContainer}>
      <img className={styles.imgBox} src={logo} alt="000"/>
      <p className={styles.nameBox}>{name}</p>
    </div>
  );
};

export default Box;