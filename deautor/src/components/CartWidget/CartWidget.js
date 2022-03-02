import "./CartWidget.css"
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { useContext } from "react";


const CartWidget = () => {
  const { cart } = useContext(CartContext)
    return (
      <div className='flex'>
        <div>
        <Link to='/carrito/'><img src={"./../images/carrito.png"} className='carrito' alt='Logo' /></Link>
        </div>
        <div><p className='cantidad'>{cart.length}</p>
        </div>
      </div>
      )
  }

  export default CartWidget