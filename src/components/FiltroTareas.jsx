import { useTareasContext } from "../context/TareasContext"

export default function FiltroTareas() {

  const {tareas, filter, filteredByLabel} = useTareasContext()

const labels = Array.from(new Set(tareas.map(tarea => tarea.label.toUpperCase())))

const handleFilteredChange = (e)=> {
  filteredByLabel(e.target.value)
}


  return (
    <div className="mb-4">
        <h2 className="text-xl font.bold mb-2">Filtrar por Etiqueta</h2>        
        <select 
            name="" 
            id=""
            className="border p-2 rounded mb-2 w-full"
            onChange={handleFilteredChange}
            value={filter}
        >
          <option>-- ETIQUETAS --</option>
          {labels.map((label, index)=> (
            <option
            key={index}
            value={label}
            >
            {label}
        </option>
          ))}
            
        </select>

    </div>
  )
}
