import React, { useRef, useState, useEffect } from "react";
import styles from './Modal.module.css';

import cross from '../../../assets/images/cross.svg';


const Modal = ({open, setOpen, createTask}) => {
  let [userTask, setUserTask] = useState('');

  const textareaRef = useRef();

  useEffect(() => {
    const textareaFocus = textareaRef.current;
    textareaFocus.focus();
  }, []);


  const handleChange = (e) => {
    setUserTask(e.currentTarget.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(userTask)
  };

  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      handleSubmit(e)
    }
  };


  return (
    <div>
        <div className={`${styles.overlay} ${open ? styles.show : ''}`}>
          <form className={styles.createTask}>
            <div>
              <textarea
                className={styles.textCreateTask}
                rows={10} cols={43}
                spellCheck="true"
                wrap="soft"
                placeholder="note..."
                value={userTask}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                ref={textareaRef}
                />
              <img onClick={() => setOpen(false)} src={cross} alt="close" className={styles.imgCreateTask}/>
            </div>
            <div>
              <button className={styles.buttonCreateTask} 
                onClick={(e) => {
                  handleSubmit(e);
                  setOpen(false);
                } }>
                create
              </button>
              <button
                className={styles.buttonCreateTask}
                onClick={(e) => {
                e.preventDefault();
                setUserTask('');
              }}
              >
              clean
              </button>
              </div>
          </form>
        </div>
    </div>
  );
};

export default Modal;