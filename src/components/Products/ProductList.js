import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchCategories, fetchByCategory } from '../../actions/productActions';
import ProductCard from './ProductCard';
import Loading from '../Shared/Loading';
import CategoryFilter from '../UI/CategoryFilter';

export default function ProductList() {
  const dispatch = useDispatch();
  const { list, categories, loading } = useSelector((s) => s.products);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <div className="p-6">
      <CategoryFilter
        categories={categories}
        onSelect={(c) => (c ? dispatch(fetchByCategory(c)) : dispatch(fetchProducts()))}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}