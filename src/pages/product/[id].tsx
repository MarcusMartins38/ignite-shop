import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product';
import { useRouter } from 'next/router';

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1></h1>
        <span></span>

        <p></p>

        <button>Buy Now</button>
      </ProductDetails>
    </ProductContainer>
  );
}
