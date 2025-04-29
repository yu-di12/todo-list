import React, { useState } from "react";
// import plus from '../../../assets/images/plus.svg'
import styles from './AddTask.module.css';
import Modal from "../Modal/Modal";

const AddTask = ({tasks, setTasks}) => {
  const [open, setOpen] = useState(false);


  const createTask = (userTask) => {
    if (userTask) {
      const newTask = {
        id: Date.now(),
        task: userTask,
        complete: false
      }
      setTasks([...tasks, newTask]);
    }
    setOpen(false); 
  };


  // const hangleToggle = () => {

  // }


  return (
    <div>
        <div className={styles.task} onClick={() => setOpen(true)}>
          <p className={styles.pTask}>add a task</p>
          {/* <img className={styles.imgTask} src={plus} alt="plus" /> */}
        </div>

        {open && <Modal open={open} setOpen={setOpen} createTask={createTask}/>}
        
    </div>
  );
};

export default AddTask;