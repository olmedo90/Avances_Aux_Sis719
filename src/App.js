import "./App.css";
import ListMovie from "./components/apiMovie/ListMovie";
import { Usuario } from "./components/Usuario";
import { MovieProvider } from "./useContext/MoviePrivider";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <ListMovie />

        {/* <footer>
        <h3>curso auxiliatura de Seminario @2023</h3>
      </footer> */}
      </div>
    </MovieProvider>
  );
}

export default App;
