import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import "./Tasklist.css"

const TaskList = ({tasks, deleteTask}) => {
  return (
    <div className='tasklist'>
        {
            tasks.length == 0
            ? <h2 className='whitouthTask'>Aún no has ingresado tareas!</h2>
            : tasks.map(task =>(
              <TaskItem task={task} key={task.id} deleteTask={deleteTask}/>
            ))
        }
    </div> 
  )
}

export default TaskList