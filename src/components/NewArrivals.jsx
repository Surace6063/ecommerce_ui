import { ShoppingCart } from "lucide-react";
import ProductCard from "./ProductCard";
const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1519744346366-d4fd8c7e8076?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Stylish Backpack",
    price: "$79.99",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Smartwatch Pro",
    price: "$199.99",
    image:
      "https://images.unsplash.com/photo-1512427691650-1e01c1c79f72?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1585386959984-a415522316d1?auto=format&fit=crop&w=600&q=80",
  },
];



const NewArrivals = () => {
  return (
   <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            New Arrivals
          </h2>
          <p className="mt-2 text-slate-600">
            Check out the latest additions to our collection
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default NewArrivals