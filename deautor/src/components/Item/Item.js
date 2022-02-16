import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"

function agregar() {
    console.log("Se agregó el producto al carrito");
  }

function Item ({item=[]}) {
    console.log(item)
        return (
        <div>
            <div className='columna'>
                <div className='filaProducto'>
                    <div><img src={"./images/bebida"+item.id+".png"} alt='Logo' /></div>
                    <div><p className='textoBlanco'>{item.Nombre}</p>
                    <p className='textoBlanco'>$ {item.Precio}</p>
                    <p className='textoBlanco'>Stock: {item.Stock}</p></div>
                </div>
                <ItemCount stock={item.Stock} inicial='1' onAdd={agregar} />
                <button className='boton' onClick={() => console.log("Detalle")}>Ver detalle</button>
                <button className='boton' onClick={() => agregar()}>Agregar al carrito</button>
            </div>
        </div>
          
        )

}
export default Item