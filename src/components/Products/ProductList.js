import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';
import ProductCard from './ProductCard';
import Loading from '../Shared/Loading';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;