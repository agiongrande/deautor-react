import "./ItemCart.css"
import { useContext } from "react";
//import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import CartList from "../CartList/CartList";

function ItemCart  () {

    const { removeAllItems } = useContext(CartContext)

    return(
        <>
        <p>Carrito</p>
        <button onClick={removeAllItems}>BORRAR TODO</button>
        <CartList/>
        </>
        )
    }

export default ItemCart