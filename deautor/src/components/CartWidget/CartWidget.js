import "./CartWidget.css"
import { Link } from 'react-router-dom'


const CartWidget = ({cantidad}) => {
    return (
      <div className='flex'>
        <div>
        <Link to='/carrito/'><img src={"./../images/carrito.png"} className='carrito' alt='Logo' /></Link>
        </div>
        <div><p className='cantidad'>{cantidad}</p>
        </div>
      </div>
      )
  }

  export default CartWidget