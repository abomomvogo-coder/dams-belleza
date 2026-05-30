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
    <div className="card hover:shadow-lg transition flex flex-col">
      {image ? (
        <Image src={image} alt={title} width={400} height={300} className="w-full h-56 object-cover" />
      ) : (
        <div className="w-full h-56 bg-gray-100" />
      )}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          {tag ? <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{tag}</span> : <div />}
          <div className="text-sm text-gray-500">In stock</div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mt-3 product-title"><Link href={`/products/${id}`}>{title}</Link></h3>
        {description && <p className="text-gray-500 text-sm mt-2 flex-1">{description}</p>}
        <div className="mt-4 flex items-center justify-between">
          <div className="price">{price.toLocaleString()} FCFA</div>
          <button
            onClick={() => addItem({ id, title, price, image }, 1)}
            className="btn-primary"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
