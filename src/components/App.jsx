import { useState } from "react";
import Headers from "./Headers";
import Forms from "./Forms";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
];


export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }
  function handleRemoveItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function toggleItemChecked(id) {
    setItems(items.map((item) => 
      (item.id === id ? { ...item, checked: !item.checked } : item
    )));
  }
  function clearList() {
    setItems([]);
  }

  return (
    <>
      <div className="app">
        <Headers />
        <Forms onAddItem={handleAddItem} />
        <GroceryList items={items} onRemoveItem={handleRemoveItem} onToggleItemChecked={toggleItemChecked} onClearItems={clearList} />
        <Footer items={items} />
      </div>
    </>
  )
}
