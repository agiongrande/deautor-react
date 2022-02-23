import "./ItemList.css"
import Item from "../Item/Item"

function ItemList ({productos=[]}) {
        return (
        <>
        <div className='fila'>
            {productos.map(producto => {
              return <Item key={producto.id} item={producto} />
              })
            }
          </div>
        </>
        )

}
export default ItemList