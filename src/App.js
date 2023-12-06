import './App.css';
import PopperExample from '../src/componentes/popper';
import TableroColor from './componentes/Boton_Color';

function App(){
  return (
    <div className="App">
      <div className='contenedor-perfil'>
      </div>

      <div className='contenedor-botones'>
        <PopperExample miComponente={<TableroColor></TableroColor>}>
        </PopperExample>
        <PopperExample />
        <PopperExample />
      </div>
    </div>
  );
}

export default App;
