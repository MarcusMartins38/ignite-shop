import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import Camisa from '../assets/tshirts/1.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={Camisa} />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 200</span>

        </footer>
      </Product>
    </HomeContainer>
  );
}
