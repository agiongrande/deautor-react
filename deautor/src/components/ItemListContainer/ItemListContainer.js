import  { useEffect, useState} from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firebase'
import {useNotificationServices} from "../../services/notification/NotificationServices";

const ItemListContainer = ({greatings}) => {

      const [products,setProducts] = useState([])
      const [loading,setLoading] = useState(true)
      const setNotification = useNotificationServices();

      const { categoryName } = useParams()

      useEffect(() =>{
        setLoading(true)

        getProducts(categoryName).then(response => {
          setProducts(response)
        }).catch((error) => {
          setNotification("error",error)
        }).finally(() => {
          setLoading(false)
        })

      },[categoryName])// eslint-disable-line

      return (
        <>
          {
          loading ?  
            <h1>Cargando</h1> : 
            <>
            <p className='saludo'>{greatings}</p>
            <ItemList productos={products} />
            </>
          }
        </>
      )
  }

  export default ItemListContainer