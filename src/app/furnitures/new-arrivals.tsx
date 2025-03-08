import { ProductCard } from "@/components/ui/product-card";

const products = [
  {
    id: 1,
    title: "Chair Table Set",
    price: "7999/ INR",
    image: "/funitures/furniture.avif",
    href: "/productpage"
  },
  {
    id: 2,
    title: "HDSBVH",
    price: "8999/ INR",
    image: "/funitures/furniture1.avif",
    href: "/productpage"
  },
  {
    id: 3,
    title: "PURE WOODEN FINISH",
    price: "10999/ INR",
    image: "/funitures/furniture2.avif",
    href: "/productpage"
  },
  {
    id: 4,
    title: "Outdoor Set",
    price: "12999/ INR",
    image: "/funitures/furniture3.avif",
    href: "/productpage"
  }
];

export function NewArrivals() {
  return (
    <section className="py-10 sm:py-6 px-4 sm:px-8 md:px-6 lg:px-20">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            image={product.image}
            href={product.href}
          />
        ))}
      </div>
    </section>
  );
}