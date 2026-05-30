"use client"

import ProductCard from "../components/ProductCard";
import useProducts from "../components/useProducts";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function ProductsPage(){
  const { products } = useProducts();
  const params = useSearchParams();
  const q = params?.get('q')?.toLowerCase() || '';
  const router = useRouter();

  const [category, setCategory] = useState<string>(params?.get('category') || 'all');
  const [sort, setSort] = useState<string>('featured');

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (category !== 'all' && p.category !== category) return false;
      if (!q) return true;
      return p.title.toLowerCase().includes(q) || (p.category && p.category.toLowerCase().includes(q));
    });
  }, [products, q, category]);

  const sorted = useMemo(() => {
    const copy = [...filtered];
    if (sort === 'price_asc') copy.sort((a,b)=>a.price-b.price);
    if (sort === 'price_desc') copy.sort((a,b)=>b.price-a.price);
    return copy;
  }, [filtered, sort]);

  const categories = Array.from(new Set(products.map(p => p.category).filter(Boolean))) as string[];

  return (
    <main className="min-h-screen p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">All Products{q ? ` — results for "${q}"` : ''}</h1>
        <div className="flex items-center gap-3">
          <select value={category} onChange={(e)=>{ setCategory(e.target.value); router.replace(`/products${q?`?q=${encodeURIComponent(q)}`:''}`); }} className="p-2 border rounded">
            <option value="all">All categories</option>
            {categories.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={sort} onChange={(e)=>setSort(e.target.value)} className="p-2 border rounded">
            <option value="featured">Featured</option>
            <option value="price_asc">Price: low to high</option>
            <option value="price_desc">Price: high to low</option>
          </select>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="text-gray-500">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map(p => (
            <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} description={p.description} />
          ))}
        </div>
      )}
    </main>
  )
}
