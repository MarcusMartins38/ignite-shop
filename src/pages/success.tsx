import Link from 'next/link';
import { ImageContainer, SuccessContainer } from '../styles/pages/success';

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Compra efetuada</h1>

            <ImageContainer></ImageContainer>

            <p>
                Uhuul <strong>Marcus Martins</strong>, your <strong>T-shirt Beyond the Limits</strong> already on its
                way to your home.
            </p>

            <Link href="/">Voltar ao catálogo</Link>
        </SuccessContainer>
    );
}
