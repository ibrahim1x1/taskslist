import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { delet , done , edit} from "../redux/Action"
import { Edit } from "./Edit"

export const Task=({tsk})=>{
    const dispatch=useDispatch()
    return(
        <div className="Tasks">
                              <i class="fa-sharp fa-solid fa-list-check"></i>
                              <h2 className={tsk.isDone && 'line'}>{tsk.description}</h2> 
                              <Edit tsk={tsk}/>
                              <button className={tsk.isDone? "green" :"Bouton"} onClick={()=>dispatch(done(tsk.id))}>{tsk.isDone? "Done" : "NotDone"}</button> 
                              <i class="fa-regular fa-trash-can" onClick={()=>dispatch(delet(tsk.id))}></i> 
                            </div>
    )
}