import  { useEffect, useState} from 'react'
import "./ItemDetailContainer.css"
import { getProduct } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

      const [product,setProduct] = useState([])
      const [loading,setLoading] = useState(true)

      const { productID } = useParams()

      useEffect(() =>{
        getProduct(productID).then(item => {
          setProduct(item)
        }).finally(() => {setLoading(false)})
      },[productID])

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