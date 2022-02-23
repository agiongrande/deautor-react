import  { useEffect, useState} from 'react'
import "./ItemListContainer.css"
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greatings}) => {

      const [products,setProducts] = useState([])
      const [loading,setLoading] = useState(true)

      const { categoryName } = useParams()

      useEffect(() =>{
        setLoading(true)
        getProducts(categoryName).then(products => {
          setProducts(products)
      }).finally(() => {setLoading(false)})
    },[categoryName])

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