import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../../actions/productActions';
import { addToCart } from '../../actions/cartActions';
import Loading from '../Shared/Loading';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) return <Loading />;

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{ maxHeight: '500px' }}
        />
      </div>
      <div className="col-md-6">
        <h1>{product.title}</h1>
        <p className="text-muted">{product.category}</p>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <div className="d-flex align-items-center mb-3">
          <span className="me-2">Rating: {product.rating?.rate}</span>
          <div className="text-warning">
            {Array(Math.floor(product.rating?.rate || 0))
              .fill()
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;