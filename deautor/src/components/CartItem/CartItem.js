import "./CartItem.css"
import CartContext from '../../context/CartContext'
import { useContext } from "react";


function CartItem ({item=[]}) {

    const { removeItem } = useContext(CartContext)

    return (
        <div>
            <div className='filaItem'>
                <div><img src={"./../images/bebida"+item.id+".png"} alt='Logo' /></div>
                <div><p className='textoBlanco'>{item.Nombre}</p>
                <p className='textoBlanco'>Precio unitario: $ {item.Precio}</p>
                <p className='textoBlanco'>Cantidad: {item.quantity}</p>
                <p className='textoBlanco'>Total: $ {item.quantity*item.Precio}</p></div>
                <div><button className='boton' onClick={() => removeItem(item.id)}>ELIMINAR</button></div>
            </div>
        </div>
          
        )

}
export default CartItem