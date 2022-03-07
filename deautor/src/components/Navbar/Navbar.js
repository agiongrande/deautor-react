import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import {NavLink,Link} from "react-router-dom"
import { getCategorias } from "../../asyncmock"
import { useEffect,useState } from "react"
import CartContext from '../../context/CartContext'
import { useContext } from "react";

const Navbar = () => {

  const [categorias,setCategorias] = useState([])
  const  {cart, getQuantity}  = useContext(CartContext)
  useEffect(() => {
  getCategorias().then(cat => {
    setCategorias(cat)
  })
}
)

    return (
      <nav className="Navbar">
        <div className='NavbarIzq'><Link to={''}> <img src={"./../images/logo.png"} alt='Logo' /></Link></div>
        <div className='NavbarCen'>{categorias.map(cat => <NavLink key={cat.id} to={`category/${cat.id}`} className={({isActive}) => isActive ? "botonNavActivo" : "botonNav"}>{cat.nombre}</NavLink>
        )}</div>
        <div className='NavbarDer'>{cart.length > 0 ? <CartWidget cantidad={getQuantity()} /> : null}</div>
      </nav>
      )
  }

  export default Navbar