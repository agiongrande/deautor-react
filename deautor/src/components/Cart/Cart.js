import "./Cart.css"
import { useContext } from "react";
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import CartList from "../CartList/CartList";

function Cart  () {

    const { cart,removeAllItems } = useContext(CartContext)

    if (cart.length===0){
        return(
        <>
        <div className='tituloCarrito'>Carrito</div>
        <p>No hay productos que mostrar.</p>
        <Link to='/'><button className='botonCarrito'>Volver al inicio</button></Link>
        </>
        )
    }

    return(
        <>
        <div className='tituloCarrito'>Carrito</div>
        <CartList/>
        <button className='botonCarrito' onClick={removeAllItems}>Vaciar carrito</button>
        </>
        )
    }

export default Cart