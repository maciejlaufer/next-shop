import { InferGetStaticPropsType } from 'next';
import { Product } from '../components/Product';
import { ProductResponse } from '../models/product.response';

const ProductsSSGPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(({ id, title, image }) => (
        <li key={id} className="shadow-xl rounded-xl overflow-hidden">
          <Product title={title} thumbnailUrl={image} />
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const products: ProductResponse[] = await res.json();

  return { props: { products } };
};

export default ProductsSSGPage;
