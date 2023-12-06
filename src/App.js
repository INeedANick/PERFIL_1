import './App.css';
import PopperExample from '../src/componentes/popper';

function App(){
  return (
    <div className="App">
      <div className='contenedor-perfil'>
      </div>

      <div className='contenedor-botones'>
        <PopperExample />
        <PopperExample />
        <PopperExample />
      </div>
    </div>
  );
}

export default App;
