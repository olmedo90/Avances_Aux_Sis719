import './App.css';
import CustomHoook from './components/CustomHoook';
import { Usuario } from './components/Usuario';

function App() {
  const user = {
    nombre: "Seminario",
    sigla: "sis719"
}
  return (
    <div className="App">
      <h1> Curso de Git y React</h1>
      <Usuario usuario={user}/>
      <CustomHoook/>
    </div>
  );
}

export default App;
