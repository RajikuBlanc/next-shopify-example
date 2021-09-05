import { Product } from 'shopify-buy'
import { GetStaticProps } from 'next'
import { client } from '../lib/client';

type IndexProps = {
  products: Product[];
};

const IndexPage: React.FC<IndexProps> = ({ products }) => {
  return (
    <>
      <h1>Hello Next.js 👋</h1>
      <ul>
        {
          products.map((product) =>
          <li key={product.id}>
            {product.title}
            <img src={product.images[0].src} height={80}/>
          </li>)
        }
      </ul>
    </>
  );
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const products: any = await client.product.fetchAll();
  const data:any = JSON.parse(JSON.stringify(products));
  return {
    props: {
      products: data
    },
  };
};
