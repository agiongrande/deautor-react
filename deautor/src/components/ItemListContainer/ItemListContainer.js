import  { useEffect, useState} from 'react'
import "./ItemListContainer.css"
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greatings}) => {

      const [products,setProducts] = useState([])

      useEffect(() =>{
        getProducts().then(products => {
          setProducts(products)
        })
      },[])

      return (
        <>
          <p className='saludo'>{greatings}</p>
          <ItemList productos={products} />
        </>
      )

      
  }

  export default ItemListContainer