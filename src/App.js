import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {        //La función comienza con mayuscula, pero es un componente

  return (
    <div className="App">
    <NavBar/>  
    <ItemListContainer/>
    </div>
  );
}

export default App;
