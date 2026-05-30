"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCart } from "./CartContext";

export default function ProductCard({
  id,
  title,
  price,
  image,
  tag,
  description,
}: {
  id: string;
  title: string;
  price: number;
  image?: string;
  tag?: string;
  description?: string;
}) {
  const { addItem } = useCart();

  return (
    <div className="border rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col">
      {image ? (
        <Image src={image} alt={title} width={400} height={300} className="w-full h-56 object-cover" />
      ) : (
        <div className="w-full h-56 bg-gray-100" />
      )}
      <div className="p-6 flex-1 flex flex-col">
        {tag && <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{tag}</span>}
        <h3 className="text-lg font-bold text-gray-800 mt-3"><Link href={`/products/${id}`}>{title}</Link></h3>
        {description && <p className="text-gray-500 text-sm mt-1 flex-1">{description}</p>}
        <div className="mt-3 flex items-center justify-between">
          <div className="text-pink-500 font-bold">{price.toLocaleString()} FCFA</div>
          <button
            onClick={() => addItem({ id, title, price, image }, 1)}
            className="ml-4 bg-yellow-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-800 transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
