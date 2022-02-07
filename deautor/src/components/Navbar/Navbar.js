import "./Navbar.css"

const Navbar = () => {
    return (
      <nav className="Navbar">
        <img src={"./images/logo.png"} alt='Logo' />
        <button className="Boton">Vodka</button>
        <button className="Boton">Fernet</button>
        <button className="Boton">Cerveza</button>
        <button className="Boton">Aperitivos</button>
      </nav>
      )
  }

  export default Navbar