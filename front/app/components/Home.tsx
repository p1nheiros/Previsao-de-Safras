// components/Home.tsx
import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div id='Home' className="relative min-h-[100vh] flex flex-col items-center justify-center bg-beige">
      <div className="container pl-[15px] pr-[15px] m-auto bg-beige text-darkGrey text-center">
        <div className='mx-auto mb-4 w-36 h-36'>
          <Image
            src="/foto-agrosync.png"
            alt="Imagem"
            layout="responsive"
            width={10}
            height={10}
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">AgroSync</h1>
        <p className="mb-4 text-xl">Previsão de Safra Inteligente.</p>
        <a href="mailto:seuemail@example.com" className="text-lg flex items-center justify-center mb-4 text-green hover:text-lightGreen">agrosync.suporte@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Home;
