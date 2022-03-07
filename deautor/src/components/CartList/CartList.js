import "./CartList.css"
import CartItem from "../CartItem/CartItem"
import CartContext from '../../context/CartContext'
import { useContext } from "react";

function CartList () {

    const { cart,getPrecioTotal } = useContext(CartContext)

        return (
        <>
        <div className='cartDisplay'>
            {cart.map(producto => {
              return <CartItem key={producto.id} item={producto} />
              })
            }
            <div className='precioTotal'>Total: $ {getPrecioTotal()}</div>
          </div>
        </>
        )

}
export default CartList