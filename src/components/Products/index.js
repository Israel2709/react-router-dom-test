import { useParams } from "react-router-dom";
const Products = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      {id && <h1>el producto seleccionado es {id}</h1>}
      {!id && <h1>Products</h1>}
    </>
  );
};

export default Products;
