import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { InferGetStaticPaths } from '../../types';

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  console.log('data', data);

  return (
    <div>
      Product id: {router.query.id} {data?.title}
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: { id: number }[] = await res.json();

  return {
    paths: data.map(({ id }: { id: number }) => ({
      params: { id: id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.id)
    return {
      props: {},
      notFound: true,
    };

  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
