import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import {NavLink,Link} from "react-router-dom"
import { useEffect,useState } from "react"
import CartContext from '../../context/CartContext'
import { useContext } from "react";
import {getDocs,collection} from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/firebase"

const Navbar = () => {

  const [categorias,setCategorias] = useState([])

  const  {items, getQuantity}  = useContext(CartContext)

  useEffect(() => {
    getDocs(collection(firestoreDb,"categorias")).then(response => {
      const categorias = response.docs.map(cat => {
        return{id:cat.id,...cat.data()}
      })
      setCategorias(categorias)
      console.log(categorias)
    })
  },[])

    return (
      <nav className="Navbar">
        <div className='NavbarIzq'><Link to={''}> <img src={"./../images/logo.png"} alt='Logo' /></Link></div>
        <div className='NavbarCen'>{categorias.map(cat => <NavLink key={cat.id} to={`category/${cat.id}`} className={({isActive}) => isActive ? "botonNavActivo" : "botonNav"}>{cat.Nombre}</NavLink>
        )}</div>
        <div className='NavbarDer'>{items.length > 0 ? <CartWidget cantidad={getQuantity()} /> : null}</div>
      </nav>
      )
  }

  export default Navbar