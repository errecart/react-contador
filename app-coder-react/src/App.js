import './App.css';
import ListaItems from './componentes/ListaItems';
import NavBar from './componentes/NavBar';

function App() {
  return (
<>
<NavBar />
<ListaItems saludos={'Hola nuevo usuario'}/>

</>
  );
}


export default App;
