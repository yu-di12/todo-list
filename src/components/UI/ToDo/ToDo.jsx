import React from "react";
import cross from '../../../assets/images/cross.svg';
import styles from './ToDo.module.css';

const ToDo = ({task, toggleTask, removeTask}) => {

  return (
    <div>
      <div key={task.id} className={styles.itemTodo}>
        <div
          className={`${task.complete ? `${styles.itemText} ${styles.strike}` : styles.itemText}`}
          onClick={() => toggleTask(task.id)}>
          {task.task}
        </div>
        <img src={cross} alt="delete" className={styles.itemImg} onClick={() => removeTask(task.id)}/>
      </div>
    </div>
    
  );
};

export default ToDo;