export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description?: string;
};

export const PRODUCTS: Product[] = [
  { id: "perruque1", title: "Bob Lisse Lace Front", price: 29000, image: "/images/perruque1.jpeg", category: "wigs", description: "Natural shine, soft lace front for easy styling." },
  { id: "perruque2", title: "Water Wave Boucle Emma", price: 53000, image: "/images/perruque2.jpeg", category: "wigs", description: "Full body wave with natural movement." },
  { id: "perruque3", title: "Water Wave Pixi Curl", price: 53000, image: "/images/perruque3.jpeg", category: "wigs", description: "Short curl style with volume and texture." },
  { id: "parfum1", title: "Dove Original", price: 3000, image: "/images/parfum1.jpeg", category: "perfumes", description: "Fresh everyday scent with clean floral notes." },
  { id: "parfum2", title: "KALY Eau de Parfum", price: 6000, image: "/images/parfum2.jpeg", category: "perfumes", description: "Warm jasmine and cedar for elegant evenings." },
  { id: "parfum3", title: "Lattafa Khamrah", price: 25000, image: "/images/parfum3.jpeg", category: "perfumes", description: "Luxury oriental perfume with rich amber notes." },
];
