import "./CartItem.css"
import CartContext from '../../context/CartContext'
import { useContext } from "react";


function CartItem ({item=[]}) {

    const { removeItem } = useContext(CartContext)

    return (
        <div>
            <div className='filaProducto'>
                <div><img src={"./../images/bebida"+item.id+".png"} alt='Logo' /></div>
                <div><p className='textoBlanco'>{item.Nombre}</p>
                <p className='textoBlanco'>$ {item.Precio}</p>
                <p className='textoBlanco'>Cantidad: {item.quantity}</p></div>
                <div><button onClick={() => removeItem(item.id)}>ELIMINAR</button></div>
            </div>
        </div>
          
        )

}
export default CartItem