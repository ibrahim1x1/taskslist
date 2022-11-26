import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Task } from "./Task"

export const ListTask=()=>{
    const todo = useSelector(state=>state.list)
    const [filtre,setFiltre]=useState("All")
    return(
        <>
            <div className="filter">
            <button className="Bouton" onClick={()=>setFiltre("All")}>All</button>
            <button className="Bouton" onClick={()=>setFiltre("Done")}>Done</button>
            <button className="Bouton" onClick={()=>setFiltre("Undone")}>UnDone</button>
            </div>
            {filtre == "All" ?
            todo.map(tsk=> <Task tsk={tsk}/>)
            : filtre == "Undone"?
            todo.filter(el => el.isDone == false).map(tsk=> <Task tsk={tsk}/>)
            : todo.filter(el=>el.isDone==true).map(tsk=> <Task tsk={tsk}/>)
        }
        </>
    )
}