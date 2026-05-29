import Image from "next/image"

export default function Perruques() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <a href="/" className="text-2xl font-bold text-pink-500">Dams Belleza</a>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="/" className="hover:text-pink-500">Accueil</a>
          <a href="/perruques" className="text-pink-500 font-bold">Perruques</a>
          <a href="/parfums" className="hover:text-pink-500">Parfums</a>
          <a href="/commander" className="hover:text-pink-500">Commander</a>
        </div>
      </nav>
      <section className="bg-pink-50 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Nos Perruques</h2>
        <p className="text-gray-500 mt-2">Qualite premium - Livraison a domicile</p>
      </section>
      <section className="py-12 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-pink-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/perruque1.jpeg" alt="Bob Lisse Lace Front" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Bob Lisse Lace Front</h3>
              <p className="text-gray-500 text-sm mt-1">Vietnamienne Chinoise - T10</p>
              <p className="text-pink-500 font-bold mt-3">29 000 FCFA</p>
              <a href="https://wa.me/237691949858" target="_blank" className="mt-4 block text-center bg-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">Commander via WhatsApp</a>
            </div>
          </div>
          <div className="border border-pink-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/perruque2.jpeg" alt="Water Wave Boucle Emma" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Water Wave Boucle Emma</h3>
              <p className="text-gray-500 text-sm mt-1">Frontal - T20</p>
              <p className="text-pink-500 font-bold mt-3">53 000 FCFA</p>
              <a href="https://wa.me/237691949858" target="_blank" className="mt-4 block text-center bg-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">Commander via WhatsApp</a>
            </div>
          </div>
          <div className="border border-pink-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/perruque3.jpeg" alt="Water Wave Pixi Curl" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Water Wave Pixi Curl</h3>
              <p className="text-gray-500 text-sm mt-1">Closure 5x5</p>
              <p className="text-pink-500 font-bold mt-3">53 000 FCFA</p>
              <a href="https://wa.me/237691949858" target="_blank" className="mt-4 block text-center bg-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">Commander via WhatsApp</a>
            </div>
          </div>
          <div className="border border-pink-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/perruque4.jpeg" alt="Fumi Bouncy Curl" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Fumi Bouncy Curl</h3>
              <p className="text-gray-500 text-sm mt-1">Closure 4x4 - T10 / T12 / T24</p>
              <p className="text-pink-500 font-bold mt-3">27 000 - 60 000 FCFA</p>
              <a href="https://wa.me/237691949858" target="_blank" className="mt-4 block text-center bg-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">Commander via WhatsApp</a>
            </div>
          </div>
          <div className="border border-pink-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/perruque5.jpeg" alt="Vietnamienne Chinoise" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Vietnamienne Chinoise</h3>
              <p className="text-gray-500 text-sm mt-1">T14 a T22</p>
              <p className="text-pink-500 font-bold mt-3">45 000 - 90 000 FCFA</p>
              <a href="https://wa.me/237691949858" target="_blank" className="mt-4 block text-center bg-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">Commander via WhatsApp</a>
            </div>
          </div>
          <div className="border border-pink-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/perruque6.jpeg" alt="Metisse Water Wave" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">Metisse Water Wave</h3>
              <p className="text-gray-500 text-sm mt-1">T18 a T36</p>
              <p className="text-pink-500 font-bold mt-3">38 000 - 93 000 FCFA</p>
              <a href="https://wa.me/237691949858" target="_blank" className="mt-4 block text-center bg-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">Commander via WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center py-8 text-gray-400 text-sm border-t">
        2026 Dams Belleza - Livraison a domicile - Yaounde
      </footer>
    </main>
  )
}
