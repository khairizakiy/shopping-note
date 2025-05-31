import { useState } from "react";

export default function Item({ item, onRemoveItem, onToggleItemChecked }) {
  return (
    <li key={item.id}>
      <input type="checkbox" onChange={() => onToggleItemChecked(item.id)} checked={item.checked} />
      <span style={item.checked ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.name}</span> {/* bisa make style={{ textDecoration: item.checked ? 'line-through' : 'none' }} */}
      <button onClick={() => onRemoveItem(item.id)}>&times;</button>
    </li>
  )
}