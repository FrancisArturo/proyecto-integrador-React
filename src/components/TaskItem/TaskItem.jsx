import React from 'react'

const TaskItem = ({task, deleteTask}) => {
  
  return (
    <div>
        <h3>Titulo: {task.title}</h3>
        <p>Descripcion: {task.description}</p>
        <span> Fecha de creación: {task.date}</span>
        <button onClick={() => deleteTask(task.id)}>Finalizar</button>
        <hr />
    </div>
  )
}

export default TaskItem