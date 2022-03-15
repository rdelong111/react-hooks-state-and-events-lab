import React, {useState} from "react";

function Item({ name, category }) {
  const [intheCart, inCart] = useState(false);
  const btnStatus = intheCart ? "in-cart" : "";

  function handleATC() {
    inCart(intheCart => !intheCart);
  }

  return (
    <li className={btnStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleATC}>
        {intheCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
