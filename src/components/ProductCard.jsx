import { ShoppingCart } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-md shadow overflow-hidden hover:shadow transition-shadow">
      <img
        src="https://i.imgur.com/Ex5x3IU.jpg"
        alt="name"
        className="h-56 w-full object-cover"
      />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 truncate">
            Sleek All-Terrain Go-Kart
          </h3>
          <p className="text-slate-600">$20</p>
        </div>
        <button className="btn btn-primary mt-4 w-full flex gap-2 justify-center items-center">
          <span>Add to Cart</span> <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
