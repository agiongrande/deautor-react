import  { useEffect, useState} from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from '@firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'

const ItemListContainer = ({greatings}) => {

      const [products,setProducts] = useState([])
      const [loading,setLoading] = useState(true)

      const { categoryName } = useParams()

      useEffect(() =>{
        setLoading(true)

        const collectionRef= categoryName ?  query(collection(firestoreDb, 'productos'),where('Categoria', '==', categoryName)) : collection(firestoreDb,'productos')

        getDocs(collectionRef).then(querySnapshot => {
          const products = querySnapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
          })
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