import React from "react";
import { AiFillDelete } from "react-icons/ai";
import '../Css/Tarea.css';




function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {

    return(
        <div className={completada ? 'contenedor-tarea completada' : 'contenedor-tarea'}>
            <div className="tarea-texto"
                onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-icono"
                onClick={() =>eliminarTarea(id)}>
                <AiFillDelete className='tarea-icono' />
            </div>
        </div>
    );
}


export default Tarea;