
import { useState } from "react"
import { useDispatch } from "react-redux"
import { ajouter } from "../redux/Action"

export const AddTask=()=>{
   
    const dispatch = useDispatch()
    const [newTask,setNewTask] = useState('')
 
    return(
        <div className="ajouter">
            <input className="input" onChange={(e)=>setNewTask(e.target.value)} placeholder="TASK" type='text' />
            <button className="Bouton" onClick={()=>dispatch(ajouter({description : newTask, id : Math.random(), isDone:false}))}>Add</button>
        </div>
    )
}