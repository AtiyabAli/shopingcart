import { useState } from "react";
import Data from "../../Data.json";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState(Data.products);

  return (
    <div className="d-flex flex-wrap">
      {products.map((p) => {
        return (<Product product={p}/>);
      })}
    </div>
  );
};

export default Products;
