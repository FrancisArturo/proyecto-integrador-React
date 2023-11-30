import React from 'react'
import "./TaskItem.css"
import { MdFileDownloadDone } from "react-icons/md";
const TaskItem = ({task, deleteTask}) => {
  
  return (
    <div className='taskContainer'>
      <div className='taskDetails'>
        <h3>{task.title}</h3>
        <br />
        <p>{task.description}</p>
        <br />
        <span>{task.date}</span>
        <br />
      </div>
      <div>
        <button onClick={() => deleteTask(task.id)} className='btnFinish btnVioletBg'><MdFileDownloadDone /> Finalizar Tarea</button> 
      </div>
    </div>
  )
}

export default TaskItem