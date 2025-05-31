import { useState } from "react";

export default function DownloadButton({ items }) {
  function handleDownload() {
    const header = "🧾 Catatan Belanjaan\n====================\n\n";
    const list = items.map((item, index) =>
      `${index + 1}. ${item.quantity}x ${item.name} ${item.checked ? "[✓]" : "[ ]"}`
    ).join('\n');

    const fullText = header + list;

    const blob = new Blob([fullText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'catatan-belanja.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <button onClick={handleDownload}>⬇️ Download Catatan</button>
  );
}
