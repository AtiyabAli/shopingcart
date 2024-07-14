import { useContext } from "react";
import { CartContext } from "../features/ContextProvider";



const Product = ({product}) => {

  const {dispatch} = useContext(CartContext)

  const {thumbnail, title, price} = product
    return (   
      <div className="card " >
        <img src={thumbnail} className="card-img-top w-50" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h4 className="card-title">${price}</h4>
          
          <button className="btn btn-primary" onClick={()=> dispatch({type: "Add", product: product})}>
           Add to cart
          </button>
        </div>
      </div> 
  );
};

export default Product;
