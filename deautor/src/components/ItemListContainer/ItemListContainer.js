import ItemCount from "../ItemCount/ItemCount"
import "./ItemListContainer.css"

const ItemListContainer = ({greatings}) => {
    function agregar(cant) {
        console.log("Se agregaron " + cant + " unidades al carrito");
      }

      return (
        <>
       <p className='saludo'>{greatings}</p>
       <ItemCount stock='10' inicial='1' onAdd={agregar} />
      </>
      )

      
  }

  export default ItemListContainer