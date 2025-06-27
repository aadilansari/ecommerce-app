import { Link } from 'react-router-dom';
export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-48 object-contain mx-auto" />
        <h3 className="mt-2 font-semibold text-sm line-clamp-2">{product.title}</h3>
        <p className="mt-1 font-bold">${product.price}</p>
      </Link>
    </div>
  );
}