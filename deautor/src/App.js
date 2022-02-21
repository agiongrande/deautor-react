import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greatings="Bienvenido a DeAutor" />
      <ItemDetailContainer titulo="Detalle de producto" />
    </div>
  );
}

export default App;
