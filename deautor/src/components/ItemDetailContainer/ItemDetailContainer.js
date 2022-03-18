import  { useEffect, useState} from 'react'
import "./ItemDetailContainer.css"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import {useNotificationServices} from "../../services/notification/NotificationServices";

const ItemDetailContainer = () => {

  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(true)
  const setNotification  = useNotificationServices()

  const { productID } = useParams()

  useEffect(() =>{
    setLoading(true);
    const docRef= doc(firestoreDb,"productos", productID)
    getDoc(docRef).then(response =>  {
      const product = {id: response.id, ...response.data()}
    setProduct(product)  
  }).catch((error) => {
    setNotification("error",error)
  }).finally(() => {setLoading(false)})

  },[productID])// eslint-disable-line


      return (
        <>
          {loading ?  
            <h1>Cargando</h1> : 
            <ItemDetail item={product} />
          }
        </>
      )
  }

  export default ItemDetailContainer