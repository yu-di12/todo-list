import React from "react";
import Box from "../Box/Box";
import Icon from '../../../assets/images/Icon.svg';
import tasks from '../../../assets/images/tasks.svg';
import star from '../../../assets/images/star.svg';
import bin from '../../../assets/images/bin.svg';
import styles from './LeftSideBar.module.css'


const LeftSideBar = () => {
  const infoBoxes = [
    { imageUrl: tasks, title: 'tasks' },
    { imageUrl: star, title: 'important' },
    { imageUrl: bin, title: 'completed' }
  ];


  return (
    <div className={styles.toDoLeftSide}>
      <div className={styles.headerLeftSide}>
        <img className={styles.imgLeftSide} src={Icon} alt="Icon"/>
        <p className={styles.pLeftSide}>TO - DO</p>
      </div>
      
      {infoBoxes.map((box, index) => (
      <Box key={index} logo={box.imageUrl} name={box.title} />
      ))}
    </div>
  );
};

export default LeftSideBar;