import { AJOUTER, DELETE, DONE, EDIT } from "./Actiontypes"

export const ajouter=(payload)=>{
    return(
        {
            type : AJOUTER,
            payload 
        }
    )
};
export const delet=(payload)=>{
    return(
        {
            type : DELETE,
            payload
        }
    )
}
export const done=(payload)=>{
  
    return(
        {
            type:DONE,
            payload
        }
    )
}

export const editTas=(payload)=>{
    return(
        {
            type:EDIT,
            payload
        }
    )
}