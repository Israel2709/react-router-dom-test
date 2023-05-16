import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <Link to="/">Home</Link>
      </li>
      <li className="list-group-item">
        <Link to="/products">Products</Link>
      </li>
      <li className="list-group-item">
        <Link to="/products/1">detalle</Link>
      </li>
    </ul>
  );
};

export default Menu;
