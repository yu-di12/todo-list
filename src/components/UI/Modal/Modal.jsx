import React, { useState } from "react";
import styles from './Modal.module.css';

import cross from '../../../assets/images/cross.svg';


const Modal = ({open, setOpen}) => {
  const [todos, setTodos] = useState('');

  // const addTask = ()

  // const handleChange = () => {};
  const handleSubmit = () => {}


  return (
    <div>
        <div className={`${styles.overlay} ${open ? styles.show : ''}`}>
          <form className={styles.createTask} onSubmit={handleSubmit}>
            <div>
              <textarea className={styles.textCreateTask} rows={10} cols={43} spellCheck="true" wrap="soft" />
              <img onClick={() => setOpen(false)} src={cross} alt="close" className={styles.imgCreateTask}/>
            </div>
            <div>
              <button className={styles.buttonCreateTask} onClick={() => setOpen(false)}>create</button>
              <button className={styles.buttonCreateTask}>delete</button>
              </div>
          </form>
        </div>
    </div>
  );
};

export default Modal;