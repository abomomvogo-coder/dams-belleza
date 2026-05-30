import CartIcon from "./components/CartIcon";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-yellow-50">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-yellow-700">Dam's Belleza</span>
        </h2>
        <p className="text-lg text-gray-500 mb-8 max-w-xl">
          Quality wigs & luxury perfumes — delivered to Yaoundé.
        </p>
        <div className="flex gap-4">
          <a href="/perruques" className="bg-yellow-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-800 transition">
            View Wigs
          </a>
          <a href="/parfums" className="border border-yellow-700 text-yellow-700 px-6 py-3 rounded-full font-semibold hover:bg-yellow-50 transition">
            View Perfumes
          </a>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 px-8">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <a href="/perruques" className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition border">
            <div className="text-5xl mb-4">💇🏾‍♀️</div>
            <h4 className="text-xl font-bold text-gray-800">Wigs</h4>
            <p className="text-gray-500 mt-2">Lace front, closure, frontal, bundles...</p>
          </a>
          <a href="/parfums" className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition border">
            <div className="text-5xl mb-4">🌸</div>
            <h4 className="text-xl font-bold text-gray-800">Perfumes</h4>
            <p className="text-gray-500 mt-2">Kaly, Lattafa, Mousuf, Dove...</p>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-400 text-sm border-t">
        © 2026 Dam's Belleza · Home delivery · Yaoundé
      </footer>

    </main>
  );
}

