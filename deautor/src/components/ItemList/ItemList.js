import "./ItemList.css"
import Item from "../Item/Item"

function ItemList ({productos=[]}) {
        return (
        <>
        <div class='fila'>
            {productos.map(producto => {
              return <Item item={producto} />
              })
            }
          </div>
        </>  
        )

}
export default ItemList