import { AJOUTER, DELETE, DONE, EDIT } from "./Actiontypes"

const initialState = {list : [
    {description : "Task1", id : Math.random(), isDone:false},
    {description : "Task2", id : Math.random(), isDone:false},
    {description : "Task3", id : Math.random(), isDone:false}
]
}
const Reducer=(state = initialState,action)=>{

    switch (action.type) {
        case AJOUTER : return {...state,list :[...state.list,action.payload]}
        case DELETE : return {...state,list : state.list.filter(task => task.id != action.payload)}
        case DONE : return {...state,list : state.list.map(el => el.id == action.payload? {...el,isDone : !el.isDone} : el )}
        case EDIT : return {...state,list : state.list.map(elm=>elm.id==action.payload.id? {...elm,description : action.payload.description } : elm)}
        default: return state
    }
}
export default Reducer