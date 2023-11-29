import React, { useEffect, useState } from 'react'
import './App.css'
import { TaskForm, TaskList } from './components'

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchedTasks, setSearchedTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
  const deleteTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id != taskId))
  }
  const handleChangeSearch = (e) =>{
    setSearchString(e.target.value)
  }
  useEffect(() => {
    setSearchedTasks(tasks.filter(task => 
      task.title.toLowerCase().includes(searchString.toLowerCase())
      ||
      task.description.toLowerCase().includes(searchString.toLowerCase())
      ))
  }, [searchString, tasks])
  return (
    <>
      <div className='controls'>
        <input type="text" placeholder='escribe el nombre o descripción' value={searchString} onChange={handleChangeSearch}/>
        <TaskForm addTask={addTask}/>
      </div>
      <TaskList tasks={searchedTasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App
