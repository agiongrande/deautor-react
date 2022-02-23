import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

function agregar() {
    console.log("Se agregó el producto al carrito");
  }

function ItemDetail ({item=[]}) {
    return (
    <div>
        <div className='columnaUnico'>
            <div className='filaProductoUnico'>
            <div><p className='textoBlanco'>{item.Nombre}</p>
                <img src={`./../images/bebida${item.id}.png`} alt={item.Nombre} /></div>
                <div>
                    <p className='textoBlanco'>Precio: $ {item.Precio}</p>
                    <p className='textoBlanco'>Stock: {item.Stock}</p>
                    <p className='textoBlanco'>Tamaño: {item.Contenido} ml</p>
                    <p className='textoBlanco'>Marca: {item.Marca}</p>
                    <ItemCount stock={item.Stock} inicial='1' onAdd={agregar} />
                    <button className='boton' onClick={() => agregar()}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    </div>
      
    )

}
export default ItemDetail