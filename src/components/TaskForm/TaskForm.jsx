import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./TaskForm.css"
const TaskForm = ({addTask}) => {
    const [openModal, setOpenModal] = useState(false);
    const handleCloseModal = () => {
        setOpenModal(false);
    }
    const handleOpenModal = () => {
        setOpenModal(true);
    }
    const handleAddTask = (e) =>{
        e.preventDefault();
        const newTask = {
            title : e.target.title.value,
            description: e.target.description.value,
            date: new Date().toDateString(),
            id: uuidv4()
        }
        addTask(newTask);
        handleCloseModal();
    }
  return (
    <div>
        <button onClick={handleOpenModal}>Nueva Tarea</button>
            {
                openModal
                &&
                <div className='modal-bg'>
                    <div className='modal'>
                        <h2>Agregar Nueva Tarea</h2>
                            <form onSubmit={handleAddTask}>
                                <div className='input-cont'>
                                    <label htmlFor="title">Ingresa el Título de la Tarea</label>
                                    <input type="text" id='title' name='title'placeholder='Titulo de la tarea'/>
                                </div>
                                <div className='input-cont'>
                                    <label htmlFor="description">Ingresa la descripción de la tarea</label>
                                    <textarea id='description' name='description' placeholder='Descripcion de la tarea'></textarea>
                                </div>   
                                <div className='btn-cont'>
                                    <button onClick={handleCloseModal}>Cancelar</button>
                                    <button type='submit'>Agregar Tarea</button>
                                </div>                     
                            </form>
                    </div>
                </div>
            }
    </div>
  )
}

export default TaskForm