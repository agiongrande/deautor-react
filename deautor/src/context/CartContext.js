import { createContext,useState  } from "react"

const MyContext = createContext()

export const CartContextProvider = ({children}) => {
    const[cart,setCart] = useState([])

    const addItem = (productToAdd, quantity) => {

        const newObj = {
            ...productToAdd,
            quantity
        }

        if(isInCart(productToAdd.id)) {
            cart.map(item => (item.id === productToAdd.id) ? item.quantity += quantity : item.quantity)
        } else {
            setCart([...cart, newObj])
        }
    }

    const removeItem = (id) => {
        let nuevoCart = cart
        nuevoCart = nuevoCart.filter(item => item.id !== id);
        setCart( nuevoCart )
    }

    const removeAllItems = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    return(
        <MyContext.Provider value={{cart,addItem, removeItem, removeAllItems}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContext