import React, { useState }from "react";
import { v4 as uuidv4 } from 'uuid';
import '../Css/TareaFormulario.css';


function TareaFormulario(props) {
    const [entrada, setEntrada] = useState('');

    const manejarCambio = (e) =>{
        setEntrada(e.target.value);
    }
    const manejarEnvio = (e) =>{
        e.preventDefault();
        const tareaNueva={
            id: uuidv4(),
            texto: entrada,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }

    return(
        <form className="tarea-formulario" onSubmit={ manejarEnvio }>
            <input type="text" 
                className="tarea-input"
                placeholder="Escribe tu tarea" 
                name="texto" 
                onChange={manejarCambio} />
            <button className="tarea-boton">Agregar tarea</button>
        </form>
    );

}


export default TareaFormulario;