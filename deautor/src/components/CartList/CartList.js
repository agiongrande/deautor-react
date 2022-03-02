import CartItem from "../CartItem/CartItem"
import CartContext from '../../context/CartContext'
import { useContext } from "react";

function CartList () {

    const { cart } = useContext(CartContext)

        return (
        <>
        <div className='fila'>
            {cart.map(producto => {
              return <CartItem key={producto.id} item={producto} />
              })
            }
          </div>
        </>
        )

}
export default CartList