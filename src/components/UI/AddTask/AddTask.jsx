import React, { useState } from "react";
// import plus from '../../../assets/images/plus.svg'
import styles from './AddTask.module.css';
import Modal from "../Modal/Modal";

const AddTask = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
        <div className={styles.task} onClick={() => setOpen(true)}>
          <p className={styles.pTask}>add a task</p>
          {/* <img className={styles.imgTask} src={plus} alt="plus" /> */}
        </div>

        {open && <Modal open={open} setOpen={setOpen} />}
        
    </div>
  );
};

export default AddTask;