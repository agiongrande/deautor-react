import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greatings="Bienvenido a DeAutor"/>}/>
          <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
          <Route path='/detail/:productID' element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
