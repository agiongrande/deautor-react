import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import NotificationContext from "../../services/notification/NotificationServices";

const ItemDetail = ({item=[]}) => {

    const  [cantidad,setCantidad] = useState(0)

    const { addItem } = useContext(CartContext)
    const  setNotification  = useContext(NotificationContext)

    const handleAdd = (cantidad) =>{
        setCantidad(cantidad)
        addItem(item, cantidad)
        setNotification(`success`,`Se agregó al carrito: ${cantidad} unidades de ${item.Nombre}`)
    }

    return (
    <div>
        <div className='columnaUnico'>
            <div className='filaProductoUnico'>
                <div><p className='textoBlanco'>{item.Nombre}</p>
                    <img src={`./../images/`+item.img+`.png`} alt={item.Nombre} />
                </div>
                <div>
                    <p className='textoBlanco'>Precio: $ {item.Precio}</p>
                    <p className='textoBlanco'>Stock: {item.Stock}</p>
                    <p className='textoBlanco'>Tamaño: {item.Contenido} ml</p>
                    <p className='textoBlanco'>Marca: {item.Marca}</p>
                </div>
                <div>
                    {(cantidad===0) ? <ItemCount stock={item.Stock} inicial={cantidad} onAdd={handleAdd} /> : <Link to='/carrito/'><button className='boton'>Ver detalle</button></Link> }
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail