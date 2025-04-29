import React, { useState } from "react";
import setting from '../assets/images/setting.svg';
import '../styles/App.css';
import AddTask from "./UI/AddTask/AddTask";
import ToDo from "./UI/ToDo/ToDo";


const Main = () => {
  const [tasks, setTasks] = useState([]);
  
  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    console.log(updatedTasks); 
    setTasks(updatedTasks);
  }
  
  return (
    <div className="boxContainerMain">
      <header className="header">
        <p className="pHeader"> Nameeeeeeeee </p>
        <img className="imgHeader" src={setting} alt="000"></img>
      </header>
      <div className="containerPlaceTasks">
        {tasks.length>0 
          ? <p className="numberTask">number of tasks: {tasks.length}</p> 
          : <p className="numberTask">you don't have tasks</p>}
        <AddTask tasks={tasks} setTasks={setTasks}/>
        <div className="placeTasks">
          {tasks.map((task) => {
            return (
              <ToDo
                task={task}
                key={task.id}
                // toggleTask={hangleToggle}
                removeTask={removeTask}
              />
            )
          })}

        </div>
      </div>
    </div>
  );
};

export default Main;