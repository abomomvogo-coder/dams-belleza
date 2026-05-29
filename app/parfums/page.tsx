import Image from "next/image"

export default function Parfums() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <a href="/" className="text-2xl font-bold text-pink-500">Dams Belleza</a>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="/" className="hover:text-pink-500">Accueil</a>
          <a href="/perruques" className="hover:text-pink-500">Perruques</a>
          <a href="/parfums" className="text-pink-500 font-bold">Parfums</a>
          <a href="/commander" className="hover:text-pink-500">Commander</a>
        </div>
      </nav>
      <section className="bg-yellow-50 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Nos Parfums</h2>
        <p className="text-gray-500 mt-2">Senteurs de luxe - Livraison a domicile</p>
      </section>
      <section className="py-12 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-yellow-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/parfum1.jpeg" alt="Dove" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Deodorant</span>
              <h3 className="text-lg font-bold text-gray-800 mt-3">Dove Original</h3>
              <p className="text-gray-500 text-sm mt-1">Deodorant 48h - Moisturising Cream</p>
              <p className="text-pink-500 font-bold mt-3">3 000 FCFA</p>
              <a href="https://wa.me/237691949858" target="_blank" className="mt-4 block text-center bg-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">Commander via WhatsApp</a>
            </div>
          </div>
          <div className="border border-yellow-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/parfum2.jpeg" alt="KALY" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">KALY</span>
              <h3 className="text-lg font-bold text-gray-800 mt-3">KALY Eau de Parfum</h3>
              <p className="text-gray-500 text-sm mt-1">Vardy, Vanilla, Glory Days, Eden, Pistachio, Libre, Lovefest, Silent Ways</p>
              <p className="text-pink-500 font-bold mt-3">6 000 FCFA</p>
              <a href="https://wa.me/237691949858" target="_blank" className="mt-4 block text-center bg-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">Commander via WhatsApp</a>
            </div>
          </div>
          <div className="border border-yellow-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/parfum3.jpeg" alt="Lattafa Khamrah" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Lattafa</span>
              <h3 className="text-lg font-bold text-gray-800 mt-3">Lattafa Khamrah</h3>
              <p className="text-gray-500 text-sm mt-1">Oriental - Vanille, Oud et epices chaudes</p>
              <p className="text-pink-500 font-bold mt-3">25 000 FCFA</p>
              <a href="https://wa.me/237691949858" target="_blank" className="mt-4 block text-center bg-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">Commander via WhatsApp</a>
            </div>
          </div>
          <div className="border border-yellow-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/parfum4.jpeg" alt="Lattafa Yara Asad" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Lattafa</span>
              <h3 className="text-lg font-bold text-gray-800 mt-3">Lattafa Yara et Asad</h3>
              <p className="text-gray-500 text-sm mt-1">Pour Elle et Pour Lui - plusieurs varietes</p>
              <p className="text-pink-500 font-bold mt-3">12 000 FCFA</p>
              <a href="https://wa.me/237691949858" target="_blank" className="mt-4 block text-center bg-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">Commander via WhatsApp</a>
            </div>
          </div>
          <div className="border border-yellow-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/parfum5.jpeg" alt="Mousuf individuel" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Mousuf</span>
              <h3 className="text-lg font-bold text-gray-800 mt-3">Mousuf individuel</h3>
              <p className="text-gray-500 text-sm mt-1">Wardi, Sexy, Ramadi, Sandi - avec pochette</p>
              <p className="text-pink-500 font-bold mt-3">10 000 FCFA</p>
              <a href="https://wa.me/237691949858" target="_blank" className="mt-4 block text-center bg-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">Commander via WhatsApp</a>
            </div>
          </div>
          <div className="border border-yellow-100 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <Image src="/images/parfum6.jpeg" alt="Mousuf collection" width={400} height={300} className="w-full h-56 object-cover" />
            <div className="p-6">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Mousuf</span>
              <h3 className="text-lg font-bold text-gray-800 mt-3">Mousuf collection</h3>
              <p className="text-gray-500 text-sm mt-1">Asad, Dahbi, Sapphire, Sexy, Ramadi, Candy, Musk, Wardi</p>
              <p className="text-pink-500 font-bold mt-3">3 000 FCFA l'unite - 7 000 FCFA le coffret</p>
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
