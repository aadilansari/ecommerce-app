import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import Loading from '../Shared/Loading';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <Loading />;

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <img src={product.image} alt={product.title} className="h-72 object-contain mx-auto" />
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="italic mb-4 capitalize">{product.category}</p>
        <p className="mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-4">${product.price}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}