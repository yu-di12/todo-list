import React from "react";
import cross from '../../../assets/images/cross.svg';
import styles from './ToDo.module.css';

const ToDo = ({todo, toggleTask, removeTask}) => {

  return (
    <div>
      <div key={todo.id} className={styles.itemTodo}>
        <div 
          className={`${todo.complete ? `${styles.itemText} ${styles.strike}` : styles.itemText}`}
          onClick={() => toggleTask(todo.id)}
          >
          {todo.task}
        </div>
        <div 
          className={styles.itemDelete} onClick={() => removeTask(todo.id)}>
            <img src={cross} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ToDo;