"use client";

import Link from "next/link";
import React from "react";
import { useCart } from "./CartContext";

export default function CartIcon() {
  const { totalCount } = useCart();
  return (
    <Link href="/commander" className="relative inline-flex items-center gap-2 text-sm text-gray-700">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3h2l1 5h13l1-4H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="19" r="1" fill="currentColor" />
        <circle cx="18" cy="19" r="1" fill="currentColor" />
      </svg>
      <span>Panier</span>
      {totalCount > 0 && (
        <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium bg-pink-500 text-white rounded-full">{totalCount}</span>
      )}
    </Link>
  );
}
