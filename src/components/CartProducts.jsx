import { useContext } from "react"
import { CartContext } from "../features/ContextProvider"

const CartProducts = ({product}) => {

    const {cart, dispatch } = useContext(CartContext)

    const Increase = (id) => {
        const Index = cart.findIndex((p)=> p.id === id)
        if(cart[Index].quantity < 10){
            dispatch({type:'Increase', id})
        }
    }

    const Decrease = (id) => {
        const Index = cart.findIndex((p)=> p.id === id)
        if(cart[Index].quantity > 1){
            dispatch({type:'Decrease', id})
        }
    }
  return (
    <div className=" d-flex">
        <img src={product.thumbnail} alt="" />
        <div className="detail">
            <h4>{product.title}</h4>
            <h4>$ {product.price}</h4>
            <div className="buttons">
                <button className=" rounded-circle px-2"  onClick={()=>Decrease(product.id)}><b>-</b></button>
                <button className="  rounded-circle px-2">{product.quantity}</button>
                <button className="  rounded-circle px-2" onClick={()=>Increase(product.id)}><b>+</b></button>
            </div>
            <button className=" btn btn-sm btn-warning" onClick={()=> dispatch({type: 'Remove', id: product.id})}> Remove</button>
        </div>
      
    </div>
  )
}

export default CartProducts
