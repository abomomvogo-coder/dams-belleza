import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function ProductsPage({ searchParams }: { searchParams?: { q?: string } }) {
  const q = searchParams?.q?.toLowerCase() || '';

  const filtered = PRODUCTS.filter(p => {
    if (!q) return true;
    return p.title.toLowerCase().includes(q) || (p.category && p.category.toLowerCase().includes(q));
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">All Products{q ? ` — results for "${q}"` : ''}</h1>
      {filtered.length === 0 ? (
        <div className="text-gray-500">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} description={p.title} />
          ))}
        </div>
      )}
    </main>
  );
}
