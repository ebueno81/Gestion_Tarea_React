import { useReducer } from "react"
import { initialState, tareasReducer } from "../reducers/tareasReducer"

const useTareas = () =>{

    const [state, dispatch] = useReducer(tareasReducer, initialState)
    
    const addTarea = (tarea) => {
        dispatch({ type: 'add_tarea', payload: tarea})
    }

    const removeTarea = ( tareaId ) =>{
        dispatch({type: 'remove_tarea', payload: tareaId})
    }

    const filteredByLabel = (label)=>{
        dispatch({
            type:'filter_by_label',
            payload: label
        })
    }

    return {
        tareas: state.tareas,
        filter: state.filter,
        addTarea,
        removeTarea,
        filteredByLabel
    }
}

export default useTareas