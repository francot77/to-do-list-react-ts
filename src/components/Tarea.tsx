type TareaProps = {
  tarea: String
  borrarTarea: () => void
}

export const Tarea = ({ tarea, borrarTarea }: TareaProps) => {
  return (
    <div className="task">
      <span>{tarea}</span>
      <button onClick={borrarTarea}>Borrar</button>
    </div>
  )
}


