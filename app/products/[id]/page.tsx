"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { PRODUCTS } from "../../data/products";
import { useCart } from "../../components/CartContext";

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;
  const product = PRODUCTS.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="text-gray-500 mt-3">Please return to the catalog and choose another item.</p>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="card p-4">
          {product.image ? (
            <Image src={product.image} alt={product.title} width={800} height={600} className="w-full h-auto object-cover rounded" />
          ) : (
            <div className="w-full h-80 bg-gray-100 rounded" />
          )}
        </div>

        <div>
          <h1 className="text-2xl font-extrabold">{product.title}</h1>
          <div className="price text-2xl mt-4">{product.price.toLocaleString()} FCFA</div>
          <p className="mt-4 text-gray-600">{product.description ?? product.title}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => addItem({ id: product.id, title: product.title, price: product.price, image: product.image }, 1)}
              className="btn-primary"
            >
              Add to cart
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`I'm interested in ${product.title} (${product.price.toLocaleString()} FCFA)`)}`}
              className="px-4 py-2 border rounded text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
