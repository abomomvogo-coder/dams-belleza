"use client"

import ProductCard from "../components/ProductCard";
import CartIcon from "../components/CartIcon";

const PRODUCTS = [
  { id: "perruque1", title: "Bob Lisse Lace Front", price: 29000, image: "/images/perruque1.jpeg", description: "Vietnamienne Chinoise - T10" },
  { id: "perruque2", title: "Water Wave Boucle Emma", price: 53000, image: "/images/perruque2.jpeg", description: "Frontal - T20" },
  { id: "perruque3", title: "Water Wave Pixi Curl", price: 53000, image: "/images/perruque3.jpeg", description: "Closure 5x5" },
  { id: "perruque4", title: "Fumi Bouncy Curl", price: 27000, image: "/images/perruque4.jpeg", description: "Closure 4x4 - T10 / T12 / T24" },
  { id: "perruque5", title: "Vietnamienne Chinoise", price: 45000, image: "/images/perruque5.jpeg", description: "T14 a T22" },
  { id: "perruque6", title: "Metisse Water Wave", price: 38000, image: "/images/perruque6.jpeg", description: "T18 a T36" },
];

export default function Perruques() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <a href="/" className="text-2xl font-bold text-pink-500">Dams Belleza</a>
        <div className="flex items-center gap-6">
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-pink-500">Accueil</a>
            <a href="/perruques" className="text-pink-500 font-bold">Perruques</a>
            <a href="/parfums" className="hover:text-pink-500">Parfums</a>
          </div>
          <CartIcon />
        </div>
      </nav>

      <section className="bg-pink-50 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Nos Perruques</h2>
        <p className="text-gray-500 mt-2">Qualite premium - Livraison a domicile</p>
      </section>

      <section className="py-12 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} description={p.description} />
          ))}
        </div>
      </section>

      <footer className="text-center py-8 text-gray-400 text-sm border-t">
        2026 Dams Belleza - Livraison a domicile - Yaounde
      </footer>
    </main>
  )
}
