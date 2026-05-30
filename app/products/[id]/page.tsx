"use client";

import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import { PRODUCTS } from "../../data/products";
import { useCart } from "../../components/CartContext";

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;
  const product = PRODUCTS.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (<main className="p-8">Product not found.</main>);
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {product.image ? (
          <Image src={product.image} alt={product.title} width={600} height={450} className="w-full h-auto object-cover rounded" />
        ) : (
          <div className="w-full h-80 bg-gray-100 rounded" />
        )}

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="text-yellow-700 text-xl font-semibold mt-4">{product.price.toLocaleString()} FCFA</div>
          <p className="mt-4 text-gray-600">{product.description || product.title}</p>
          <div className="mt-6 flex gap-3">
            <button onClick={() => addItem({ id: product.id, title: product.title, price: product.price, image: product.image }, 1)} className="btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </main>
  );
}
