import "./Cart.css"
import { useState,useContext } from "react";
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import CartList from "../CartList/CartList";
import {collection, writeBatch,getDoc, doc, addDoc, Timestamp} from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/firebase";
import NotificationContext from "../../services/notification/NotificationServices";

function Cart  () {

    const { items,removeAllItems,getPrecioTotal,removeItem } = useContext(CartContext)
    const [ProcessingOrder,setProcessingOrder] = useState(false)
    const  setNotification  = useContext(NotificationContext)

    //const [contact,setContact] = useState({
    //    nombre: '',
    //    telefono: '',
    //    direccion: ''
    //})

    const confirmarOrden = () => {

        setProcessingOrder(true)

        const objOrder = {
            buyer: {
                name: '',
                direccion: '',
                telefono: ''
            },
            items: items,
            date: Timestamp.fromDate(new Date()),
            total: getPrecioTotal()
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        objOrder.items.forEach(prod => {
            getDoc(doc(firestoreDb,'productos',prod.id)).then(response => {
                if (response.data().Stock >= prod.quantity){
                    batch.update(doc(firestoreDb,"productos", prod.id), {
                        Stock: response.data().Stock - prod.quantity
                    })
                } else {
                    outOfStock.push({id: response.id, ...response.data()})
                }
            })
        });
        
            if (outOfStock.length === 0){
                addDoc(collection(firestoreDb, "ordenes"),objOrder).then(({id}) => {
                    batch.commit().then(() => {
                        setNotification(`success`,`La orden se creó exitosamente. Su número de orden es: ${id}`)
                    });
                }).catch(error => {
                    setNotification(`error`,`Error`)
                }).finally(() => {
                    setProcessingOrder(false)
                    removeAllItems();
                })
            } else {
                for (const prod of outOfStock){
                    setProcessingOrder(false)
                    setNotification(`error`,`La orden no pudo generarse por falta de stock del producto ${prod.Nombre}. Se eliminó del carrito.`)
                    removeItem(prod.id)
                }
            }
        
      
}

    if (ProcessingOrder){
        return(
        <>
            <div className='tituloCarrito'>Carrito</div>
            <p>Espere mientras se procesa su orden.</p>
        </>
        )
    }

    if (items.length===0){
        return(
        <>
        <div className='tituloCarrito'>Carrito</div>
        <p>No hay productos que mostrar.</p>
        <Link to='/'><button className='botonCarrito'>Volver al inicio</button></Link>
        </>
        )
    }

    return(
        <>
        <div className='tituloCarrito'>Carrito</div>
        <CartList/>
        <button className='botonCarrito' onClick={removeAllItems}>Vaciar carrito</button>
        <button className='botonCarrito' onClick={() => confirmarOrden()}>Confirmar compra</button>
        <div className='precioTotal'>Total: $ {getPrecioTotal()}</div>
        </>
        )
    }

export default Cart