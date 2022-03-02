import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemCart from './components/ItemCart/ItemCart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext.js';


function App() {
  return (
      <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greatings="Bienvenido a DeAutor"/>}/>
              <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
              <Route path='/detail/:productID' element={<ItemDetailContainer/>}/>
              <Route path='/carrito/' element={<ItemCart/>}/>
            </Routes>
          </BrowserRouter>
          </CartContextProvider>
      </div>

  );
}

export default App;
