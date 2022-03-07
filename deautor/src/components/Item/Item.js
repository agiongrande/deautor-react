import "./Item.css"
import {Link} from 'react-router-dom'



function Item ({item=[]}) {
        return (
        <div>
            <div className='columnaProducto'>
                <div className='filaProducto'>
                    <img src={"./../images/bebida"+item.id+".png"} alt='Bebida' />
                    <div><p className='textoBlanco'>{item.Nombre}</p>
                    <p className='textoBlanco'>$ {item.Precio}</p>
                    <p className='textoBlanco'>Stock: {item.Stock}</p></div>
                </div>
                <Link to={`/detail/${item.id}`} className='boton'><button className='boton'>Ver detalle</button></Link>
            
            </div>
        </div>
          
        )

}
export default Item