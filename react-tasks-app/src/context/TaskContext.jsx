import {createContext, useState,useEffect} from 'react'
import {Tasks} from '../data/tasks'
export const TaskContext= createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    setTasks(Tasks)
  },[])

  const createTask=(task)=>{
    setTasks( [...tasks,{
      title:task.title,
      id:tasks.length,
      description:task.description
  }])
  }
  const deleteTask=(taskID)=>{
    setTasks(tasks.filter(task=>task.id!==taskID))
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}