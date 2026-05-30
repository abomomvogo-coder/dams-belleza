"use client";

import { useEffect, useMemo, useState } from "react";
import { PRODUCTS as BASE_PRODUCTS } from "../data/products";

const STORAGE_KEY = "dams_products_custom_v1";

export type Product = {
  id: string;
  title: string;
  price: number;
  image?: string;
  category?: string;
  description?: string;
};

export default function useProducts() {
  const [custom, setCustom] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCustom(JSON.parse(raw));
    } catch (e) {
      console.warn(e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
    } catch (e) {
      console.warn(e);
    }
  }, [custom]);

  function addProduct(p: Omit<Product, "id">) {
    const prod: Product = { ...p, id: `custom_${Date.now()}` };
    setCustom((s) => [prod, ...s]);
  }

  const products = useMemo(() => {
    const base: Product[] = BASE_PRODUCTS.map((p) => ({ ...p } as Product));
    return [...custom, ...base];
  }, [custom]);

  return { products, addProduct, custom, setCustom };
}
