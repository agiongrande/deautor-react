import { createContext,useState  } from "react"

const MyContext = createContext()

export const CartContextProvider = ({children}) => {
    const[items,setItems] = useState([])

    const addItem = (productToAdd, quantity) => {

        const newObj = {
            ...productToAdd,
            quantity
        }

        if(isInCart(productToAdd.id)) {
            items.map(item => (item.id === productToAdd.id) ? item.quantity += quantity : item.quantity)
        } else {
            setItems([...items, newObj])
        }
    }

    const removeItem = (id) => {
        const nuevoCart = items.filter(item => item.id !== id);
        setItems( nuevoCart )
    }

    const getQuantity = () => {
        let cantidad = 0
        for (const item of items){
            cantidad += item.quantity
        }
        return cantidad
    }

    const getPrecioTotal = () => {
        let precio = 0
        for (const item of items){
            precio += item.quantity * item.Precio
        }
        return precio
    }

    const removeAllItems = () => {
        setItems([])
    }

    const isInCart = (id) => {
        return items.some(p => p.id === id)
    }

    return(
        <MyContext.Provider value={{items,addItem, removeItem, removeAllItems, getQuantity,getPrecioTotal}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContext