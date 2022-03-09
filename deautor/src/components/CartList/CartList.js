import "./CartList.css"
import CartItem from "../CartItem/CartItem"
import CartContext from '../../context/CartContext'
import { useContext } from "react";

function CartList () {

    const { items } = useContext(CartContext)

        return (
        <>
        <div className='cartDisplay'>
            {items.map(producto => {
              return <CartItem key={producto.id} item={producto} />
              })
            }
          </div>
        </>
        )

}
export default CartList