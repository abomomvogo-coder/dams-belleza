import CartIcon from "./components/CartIcon";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-pink-500">Dam's Belleza</h1>
        <div className="flex items-center gap-6">
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-pink-500">Accueil</a>
            <a href="/perruques" className="hover:text-pink-500">Perruques</a>
            <a href="/parfums" className="hover:text-pink-500">Parfums</a>
          </div>
          <CartIcon />
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-pink-50">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Bienvenue chez <span className="text-pink-500">Dam's Belleza</span>
        </h2>
        <p className="text-lg text-gray-500 mb-8 max-w-xl">
          Perruques de qualité & parfums de luxe — livrés directement chez vous à Yaoundé.
        </p>
        <div className="flex gap-4">
          <a href="/perruques" className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
            Voir les perruques
          </a>
          <a href="/parfums" className="border border-pink-500 text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition">
            Voir les parfums
          </a>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 px-8">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Nos catégories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <a href="/perruques" className="bg-pink-100 rounded-2xl p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">💇🏾‍♀️</div>
            <h4 className="text-xl font-bold text-gray-800">Perruques</h4>
            <p className="text-gray-500 mt-2">Lace front, closure, frontal, mèches...</p>
          </a>
          <a href="/parfums" className="bg-yellow-50 rounded-2xl p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🌸</div>
            <h4 className="text-xl font-bold text-gray-800">Parfums</h4>
            <p className="text-gray-500 mt-2">Kaly, Lattafa, Mousuf, Dove...</p>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-400 text-sm border-t">
        © 2026 Dam's Belleza · Livraison à domicile · Yaoundé
      </footer>

    </main>
  );
}
