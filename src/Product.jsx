/* eslint-disable react/prop-types */
import Price from "./Price";
import "./Product.css";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599","599"]
  let newPrices = ["8,999","9,199","899","278"]
  let description = ["8,000 DPI", "Intuitive surface", "Designed for iPad Pro", "Wireless"]
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  );
}

export default Product;
