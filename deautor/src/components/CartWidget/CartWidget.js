import "./CartWidget.css"

const CartWidget = () => {
    return (
      <div className='flex'>
        <div>
        <img src={"./images/carrito.png"} className='carrito' alt='Logo' />
        </div>
        <div><p className='cantidad'>4</p>
        </div>
      </div>
      )
  }

  export default CartWidget