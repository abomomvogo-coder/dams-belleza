"use client";

import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import Image from "next/image";

export default function CommanderPage() {
  const { items, updateQty, removeItem, clearCart, totalPrice } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [sent, setSent] = useState(false);

  function placeOrder() {
    if (!phone || items.length === 0) return alert("Please provide a phone number and add at least one item.");
    const lines = items.map((i) => `${i.qty}× ${i.title} — ${i.price.toLocaleString()} FCFA`);
    const msg = `Order for ${name || "(no name)"}\nPhone: ${phone}\nAddress: ${address || "(not provided)"}\n\n${lines.join("\n")}\n\nTotal: ${totalPrice.toLocaleString()} FCFA`;
    const url = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
    // open whatsapp link in new tab
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    // keep cart so user can confirm; optionally clear
  }

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cart & Checkout</h1>
      {items.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.id} className="flex gap-4 items-center border rounded-lg p-4">
              {it.image ? (
                <Image src={it.image} alt={it.title} width={96} height={72} className="object-cover rounded" />
              ) : (
                <div className="w-24 h-16 bg-gray-100 rounded" />
              )}
              <div className="flex-1">
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-gray-500">{it.price.toLocaleString()} FCFA</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQty(it.id, it.qty - 1)} className="px-3 py-1 bg-gray-100 rounded">-</button>
                <div className="w-8 text-center">{it.qty}</div>
                <button onClick={() => updateQty(it.id, it.qty + 1)} className="px-3 py-1 bg-gray-100 rounded">+</button>
              </div>
              <div className="w-28 text-right font-semibold">{(it.qty * it.price).toLocaleString()} FCFA</div>
              <button onClick={() => removeItem(it.id)} className="ml-4 text-sm text-red-500">Supprimer</button>
            </div>
          ))}
          <div className="flex justify-between items-center text-lg font-bold py-4 border-t">Total: {totalPrice.toLocaleString()} FCFA</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="p-3 border rounded" />
            <input placeholder="Phone (e.g. 237691...)" value={phone} onChange={(e) => setPhone(e.target.value)} className="p-3 border rounded" />
            <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="p-3 border rounded" />
          </div>

          <div className="flex gap-3 mt-4">
            <button onClick={placeOrder} className="bg-yellow-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-800 transition">Place order (WhatsApp)</button>
            <button onClick={() => { clearCart(); }} className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full">Clear cart</button>
          </div>

          {sent && <div className="text-green-600 mt-3">WhatsApp window opened. Confirm and send the message to complete the order.</div>}
        </div>
      )}
    </main>
  );
}
