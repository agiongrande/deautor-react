import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const ItemDetail = ({item=[]}) => {

    const  [cantidad,setCantidad] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleAdd = (cantidad) =>{
        setCantidad(cantidad)
        addItem(item, cantidad)
    }

    return (
    <div>
        <div className='columnaUnico'>
            <div className='filaProductoUnico'>
                <div><p className='textoBlanco'>{item.Nombre}</p>
                    <img src={`./../images/bebida${item.id}.png`} alt={item.Nombre} />
                </div>
                <div>
                    <p className='textoBlanco'>Precio: $ {item.Precio}</p>
                    <p className='textoBlanco'>Stock: {item.Stock}</p>
                    <p className='textoBlanco'>Tamaño: {item.Contenido} ml</p>
                    <p className='textoBlanco'>Marca: {item.Marca}</p>
                    {(cantidad===0) ? <ItemCount stock={item.Stock} inicial={cantidad} onAdd={handleAdd} /> : <Link to='/carrito/'><button className='boton'>Ver detalle</button></Link> }
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail