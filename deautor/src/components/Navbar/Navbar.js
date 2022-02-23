import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import {NavLink,Link} from "react-router-dom"
import { getCategorias } from "../../asyncmock"
import { useEffect,useState } from "react"

const Navbar = () => {

  const [categorias,setCategorias] = useState([])

useEffect(() => {
  getCategorias().then(cat => {
    setCategorias(cat)
  })
}
)

    return (
      <nav className="Navbar">
        <Link to={''}> <img src={"./../images/logo.png"} alt='Logo' /></Link>
        {categorias.map(cat => <NavLink key={cat.id} to={`category/${cat.id}`} className={({isActive}) => isActive ? "botonActivo" : "Boton"}>{cat.nombre}</NavLink>
        )}
        <CartWidget />
      </nav>
      )
  }

  export default Navbar