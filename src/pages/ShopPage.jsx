import Button from "../components/ui/Button";

const categories = ["All", "Shoes", "Bags", "Accessories", "Electronics"];

const products = [
  { id: 1, name: "Classic Sneakers", price: "$59.99", image: "https://images.unsplash.com/photo-1519744346366-d4fd8c7e8076?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Stylish Backpack", price: "$79.99", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Smartwatch Pro", price: "$199.99", image: "https://images.unsplash.com/photo-1512427691650-1e01c1c79f72?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "Wireless Earbuds", price: "$89.99", image: "https://images.unsplash.com/photo-1585386959984-a415522316d1?auto=format&fit=crop&w=600&q=80" },
];

const ShopPage = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 md:mb-0">Shop</h2>

          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="label">Filter by Category</label>
            <select
              id="category"
              name="category"
              className="input"
              defaultValue="All"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="border-t border-slate-200 my-10"></div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-md shadow-md overflow-hidden transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{product.name}</h3>
                  <p className="text-slate-600">{product.price}</p>
                </div>
                <Button size="sm" className="mt-3 w-full">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
