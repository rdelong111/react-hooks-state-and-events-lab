import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [Dstatus, changeLD] = useState(false);
  const appClass = Dstatus ? "App dark" : "App light"

  function handleClick() {
    changeLD(Dsatus => !Dstatus);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {Dstatus ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
