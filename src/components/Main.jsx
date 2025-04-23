import React, { useState } from "react";
import setting from '../assets/images/setting.svg';
import '../styles/App.css';
import AddTask from "./UI/AddTask/AddTask";
import ToDo from "./UI/ToDo/ToDo";


const Main = () => {
  const [todos, setTodos] = useState([]);
  
  const addTask = () => {

  }

  const removeTask = () => {

  }

  const hangleToggle = () => {

  }

  return (
    <div className="boxContainerMain">
      <header className="header">
        <p className="pHeader"> Nameeeeeeeee </p>
        <img className="imgHeader" src={setting} alt="000"></img>
      </header>
      <div className="containerPlaceTasks">
        <p className="numberTask">number of tasks: {todos.length}</p>
        <AddTask />
        <div className="placeTasks">

        {todos.map((todo) => {
          return (
            <ToDo
              key={todo.id}
            />
          )
        })}

        </div>
      </div>
    </div>
  );
};

export default Main;