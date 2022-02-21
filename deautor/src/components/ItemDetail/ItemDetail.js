import "./ItemDetail.css"


function ItemDetail ({item=[]}) {
    console.log(item)
    return (
    <div>
        <div className='columnaUnico'>
            <div className='filaProductoUnico'>
                <div><img src={"./images/bebida"+item.id+".png"} alt='Logo' /></div>
                <div>
                    <p className='textoBlanco'>{item.Nombre}</p>
                    <p className='textoBlanco'>$ {item.Precio}</p>
                    <p className='textoBlanco'>Stock: {item.Stock}</p>
                    <p className='textoBlanco'>Tamaño: {item.Contenido} ml</p>
                    <p className='textoBlanco'>Marca: {item.Marca}</p>
                    <p className='textoBlanco'>Tipo de bebida: {item.Bebida}</p>
                </div>
            </div>
        </div>
    </div>
      
    )

}
export default ItemDetail