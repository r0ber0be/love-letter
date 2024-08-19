import { Letter } from "@/components/letter";
import pic1 from '../../images/teste.jpeg'
import pic2 from '../../images/teste.png'
import pic3 from '../../images/teste10.jpeg'
import pic4 from '../../images/teste4.jpeg'
import pic5 from '../../images/teste5.jpeg'
import pic6 from '../../images/teste9.jpg'
import pic7 from '../../images/teste6.jpeg'
import pic8 from '../../images/teste7.jpg'

import Link from "next/link";

export default function Home() {
  return (
    <>
    <Link href={'/memories'} className="fixed z-50 top-0 left-1/2 transform -translate-x-1/2 text-black rounded-b-xl p-4 bg-fuchsia-300 hover:bg-fuchsia-400">
      Memórias
    </Link>

    <main className="flex min-h-screen flex-col items-center justify-between mt-6 md:mt-0 p-12 md:p-24">
      <p>Para a minha amada Amy...</p>
      <div className="text-justify">
        Olá, eu gostaria que você lesse os textos de acordo com o que está sentindo, isso se eu não estiver disponível pra te ajudar na hora. Espero que isso possa te ajudar de alguma forma. Que essas palavras sejam aconchegantes e possam melhorar a sua perspectiva. Me dá um desconto pelo visual, eu não sou designer sksksks Fiz com todo carinho do mundo pra você, que eu amo demais... Me desculpe.
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/r0ber0be"
            target="_blank"
            rel="noopener noreferrer"
          >
            Por{" "} r0ber0be
          </a>
        </div>
      </div>

      <div className="mt-5 mb-32 grid text-center lg:mb-5 lg:w-full lg:max-w-5xl lg:grid-cols-4 text-white">
        <Letter id={1} videoUrl="https://www.youtube.com/watch?v=fJsJU7E7X-M" picture={pic1} title="Lar é esperança" />
        <Letter id={2} videoUrl="https://www.youtube.com/watch?v=CU0i9W_XkDI" picture={pic2} title="Raiva" />
        <Letter id={3} videoUrl="https://www.youtube.com/watch?v=30fbS1x0i5M" picture={pic3} title="Você é linda" />
        <Letter id={4} videoUrl="https://www.youtube.com/watch?v=QTTnL5EllD8" picture={pic4} title="Saudades" />
        <Letter id={5} videoUrl="https://www.youtube.com/watch?v=leSiBkOm8c4" picture={pic5} title="Amor" />
        <Letter id={6} videoUrl="https://www.youtube.com/watch?v=ZVgHPSyEIqk" picture={pic6} title="Solidão" />
        <Letter id={7} videoUrl="https://www.youtube.com/watch?v=5j3_joi36gY" picture={pic7} title="Promessas" />
        <Letter id={8} videoUrl="https://www.youtube.com/watch?v=gWbbtMqnUq4" picture={pic8} title="Boa sorte :))" />
      </div>
    </main>
    </>
  );
}
