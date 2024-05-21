import Image from "next/image";
import { HomeContainer, Product } from "@/styles/pages/home";
import 'keen-slider/keen-slider.min.css';

import {useKeenSlider} from 'keen-slider/react'

import Camisa from '../assets/tshirts/1.png';
import Camisa2 from '../assets/tshirts/2.png';
import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef}>
      <Product className="keen-slider__slide">
        <Image src={Camisa} alt='first' />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 200</span>

        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Camisa2} alt='second' />

        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 300</span>

        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Camisa2} alt='second' />

        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 120</span>

        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Camisa2} alt='second' />

        <footer>
          <strong>Camiseta 4</strong>
          <span>R$ 1660</span>

        </footer>
      </Product>
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list();

  return {
    props: {

    }
  }
}