import Interfaz from "./components/UI/Interfaz";
import MiApi from "./components/MiApi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Interfaz>
        <h1 className="text-center"><i class="fa-regular fa-flag"></i> Feriados Chilenos <i class="fa-regular fa-flag"></i></h1>
        <MiApi />
      </Interfaz>
    </>
  );
}

export default App;
