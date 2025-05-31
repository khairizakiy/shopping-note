import { useState } from "react";

export default function Footer({ items }) {
  if (items.length === 0) {
    return <footer className="stats">Daftar belanjaan kosong</footer>
  }


  const totalItems = items.length;
  const totalChecked = items.filter(item => item.checked).length;
  const percentageChecked = Math.round((totalChecked / totalItems) * 100);

  return (
    <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {totalChecked} barang sudah dibeli ({percentageChecked}%)</footer>
  )
}
