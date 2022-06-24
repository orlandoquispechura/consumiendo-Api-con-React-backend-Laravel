import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="App">
      <div className='contenedor-titulo'>
        <h1>Proyecto Tareas</h1>
      </div>
      <div className='tarea-principal'>
        <h2>Mis Tareas</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
