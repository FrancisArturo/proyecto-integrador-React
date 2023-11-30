import React, { useEffect, useState } from 'react'
import './App.css'
import { TaskForm, TaskList } from './components'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
      <div className='container'>
        <div className='main'>
          <Header />
          <div className='controls'>
            <input type="text" placeholder='Busca por nombre o descripción' value={searchString} onChange={handleChangeSearch} className='inputBuscar'/>
            <TaskForm addTask={addTask}/>
          </div>
          <TaskList tasks={searchedTasks} deleteTask={deleteTask}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
