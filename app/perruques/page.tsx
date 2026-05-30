"use client"

import ProductCard from "../components/ProductCard";
import CartIcon from "../components/CartIcon";
import { PRODUCTS } from "../data/products";

export default function Perruques() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-yellow-50 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Wigs</h2>
        <p className="text-gray-500 mt-2">Premium quality — home delivery</p>
      </section>

      <section className="py-12 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.filter(p => p.category === 'wigs').map((p) => (
            <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} description={p.title} />
          ))}
        </div>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm border-t">
        2026 Dams Belleza - Home delivery - Yaoundé
      </footer>
    </main>
  )
}
