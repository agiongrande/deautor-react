import  { useEffect, useState} from 'react'
import "./ItemDetailContainer.css"
import { getProduct } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({titulo}) => {

      const [product,setProduct] = useState([])

      useEffect(() =>{
        getProduct().then(product => {
          setProduct(product)
        })
      },[])

      return (
        <>
          <p className='saludo'>{titulo}</p>
          <ItemDetail item={product} />
        </>
      )
  }

  export default ItemDetailContainer