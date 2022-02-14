import "./ItemCount.css"
import {useState} from 'react';

function ItemCount  ({stock,inicial,onAdd}) {

    const [count,setCount] = useState(1);

    const sumar = () => {
        if (count < stock){
            setCount(count+1)
        }
    }
    
    const restar = () => {
        if (count > inicial){
            setCount(count-1)
        }
    }

    return (
        <div className='columna'>
            <p className='textoBlanco'>Vodka Smirnoff</p>
            <div className='fila'>
                <button className='botonS' onClick={restar}>-</button>
                <p className='textoBlanco'>{count}</p>
                <button className='botonS' onClick={sumar}>+</button>
            </div>
            <button className='boton' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
      )
  }

  export default ItemCount