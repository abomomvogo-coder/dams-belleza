"use client";

import React, { useState } from "react";
import useProducts from "../components/useProducts";

export default function AdminPage() {
  const { addProduct } = useProducts();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function onAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !price) return alert("Title and price are required");
    addProduct({ title, price: Number(price), image, category, description });
    setTitle(""); setPrice(0); setImage(""); setCategory(""); setDescription("");
    alert("Product added to local store. It will appear in All Products.");
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Admin — Add Product</h1>
      <form onSubmit={onAdd} className="space-y-3">
        <input placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full p-2 border rounded" />
        <input placeholder="Price (FCFA)" value={price} onChange={(e)=>setPrice(Number(e.target.value))} className="w-full p-2 border rounded" />
        <input placeholder="Image URL (optional)" value={image} onChange={(e)=>setImage(e.target.value)} className="w-full p-2 border rounded" />
        <input placeholder="Category (e.g. wigs, perfumes)" value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full p-2 border rounded" />
        <textarea placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} className="w-full p-2 border rounded" />
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Add product</button>
        </div>
      </form>
      <p className="text-sm text-gray-500 mt-3">Note: products added here are stored in your browser localStorage only. To make them permanent, add them to `app/data/products.ts` in the repo.</p>
    </main>
  )
}
