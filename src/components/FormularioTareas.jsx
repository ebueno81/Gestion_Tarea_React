import { useState } from "react"
import { useTareasContext } from "../context/TareasContext"

export default function FormularioTareas() {

  const [text, setText] = useState('')
  const [label, setLabel] = useState('')

  const {addTarea} = useTareasContext()

  const handleAddTarea = () => {
    if (text && label){
      addTarea({
        id:Date.now(),
        text,
        label
      })

      setText('')
      setLabel('')
    }
  }

  return (
    <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Añadir Tarea</h2>
        <input 
        type="text"
        className="border p-2 rounded mb-2 w-full"
        placeholder="Descripcion de la tarea"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        
        <h2 className="text-xl font-bold mb-2">Añadir</h2>
        <input
         className="border p-2 rounded mb-2 w-full"
         type="text"
         placeholder="Etiqueta"
         value={label}
         onChange={(e)=>setLabel(e.target.value)}
         />
        
        <button
        onClick={handleAddTarea}
        className="bg-blue-500 text-white px-4  py-2 rounded"
        >
            Añadir
        </button>
    </div>
  )
}
