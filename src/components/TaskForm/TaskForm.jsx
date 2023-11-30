import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CgAddR } from "react-icons/cg";
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
        <button onClick={handleOpenModal} className='btnAgregar btnBlueBg'>
            <CgAddR />
            <span className='spanBtn'>Agregar</span>
        </button>
            {
                openModal
                &&
                <div className='modal-bg'>
                    <div className='modal'>
                        <h2>Agregar Nueva Tarea</h2>
                            <br />
                            <form onSubmit={handleAddTask}>
                                <div className='input-cont'>
                                    <input type="text" id='title' name='title' placeholder='Título de la tarea'/>
                                </div>
                                <div className='input-cont'>
                                    <textarea id='description' name='description' placeholder='Descripción de la tarea'></textarea>
                                </div>   
                                <div className='btn-cont'>
                                    <button onClick={handleCloseModal} className='btnModal btnVioletBg'>Cancelar</button>
                                    <button type='submit' className='btnModal btnBlueBg'>Agregar Tarea</button>
                                </div>                     
                            </form>
                    </div>
                </div>
            }
    </div>
  )
}

export default TaskForm