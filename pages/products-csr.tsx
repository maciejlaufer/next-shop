import { useQuery } from 'react-query';
import { Product } from '../components/Product';
import { ProductResponse } from '../models/product.response';

const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const data: ProductResponse[] = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const { isLoading, data } = useQuery('products', getProducts);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Something went wrong </div>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map(({ id, title, image }) => (
        <li key={id} className="shadow-xl rounded-xl overflow-hidden">
          <Product title={title} thumbnailUrl={image} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsCSRPage;
