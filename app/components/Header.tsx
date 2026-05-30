"use client"

import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

export default function Header(){
  const [q, setQ] = useState("");

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-extrabold" style={{color: 'var(--accent)'}}>Dam's Belleza</Link>
          <nav className="hidden md:flex gap-4 text-sm text-gray-600">
            <Link href="/products" className="hover:text-yellow-700">All Products</Link>
            <Link href="/perruques" className="hover:text-yellow-700">Wigs</Link>
            <Link href="/parfums" className="hover:text-yellow-700">Perfumes</Link>
          </nav>
        </div>

        <div className="flex-1 px-4">
          <form onSubmit={(e)=>{e.preventDefault(); if(q) window.location.href = `/products?q=${encodeURIComponent(q)}`}}>
            <div className="flex items-center bg-gray-50 border rounded overflow-hidden shadow-sm">
              <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search products, brands and categories" className="w-full px-4 py-2 text-sm bg-transparent outline-none" />
              <button className="px-4 py-2 text-sm btn-primary">Search</button>
            </div>
          </form>
        </div>

        <div className="flex items-center gap-4">
          <CartIcon />
        </div>
      </div>
    </header>
  )
}
