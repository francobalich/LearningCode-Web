import {useState,useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        createTask({
            title,
            description
        })
        setTitle("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='Escribe tu tarea'
            onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea placeholder='Excribe la descripcion de la tarea'
            onChange={(e)=>setDescription(e.target.value)}
        ></textarea>
        <button>Guardar</button>
    </form>
  )
}

export default TaskForm