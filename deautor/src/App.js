import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext.js';
import { NotificationServicesProvider} from './services/notification/NotificationServices'

function App() {
  return (
      <div className="App">
        <NotificationServicesProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greatings="Bienvenido a DeAutor"/>}/>
                <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
                <Route path='/detail/:productID' element={<ItemDetailContainer/>}/>
                <Route path='/carrito/' element={<Cart/>}/>
              </Routes>
            </BrowserRouter>
            </CartContextProvider>
          </NotificationServicesProvider>
      </div>

  );
}

export default App;
