import React, { useState } from "react";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
import '../Css/ListaDeTareas.css';


function ListaDeTareas() {
        const [ tareas, setTareas ] = useState([]);

        const agregarTarea = tarea =>{
            if (tarea.texto.trim()) {
                tarea.texto = tarea.texto.trim();
                const tareaActualizada = [tarea, ...tareas];
                setTareas(tareaActualizada);
            }else{
                alert('debe ingresar su tarea')
            }
        };

        const eliminarTarea = id =>{
            setTareas(tareas.filter(tarea => tarea.id !== id));
        }
        const completarTarea = id =>{
            const tareaActualizadas = tareas.map(tarea =>{
                if (tarea.id === id) {
                    tarea.completada = !tarea.completada;
                }
                return (tarea);
            })
            setTareas(tareaActualizadas);
        }
    return(
        <>
        <TareaFormulario onSubmit={ agregarTarea } />
        <div className="tareas-lista-contenedor">
            {
                tareas.map((tarea) =>
                <Tarea 
                key={tarea.id}
                id= {tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea = {completarTarea}
                />
                )
            }
        </div>
        </>
    );
}


export default ListaDeTareas;