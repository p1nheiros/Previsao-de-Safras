import React from 'react';

const About = () => {
  return (
    <div id='About' className="relative min-h-[100vh] flex items-center justify-center bg-beige bottom-8">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Sobre a AgroSync</h1>

        <div className="flex flex-wrap justify-center">
          {/* Primeiro Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 mx-4 mt-8 w-full md:w-1/3 lg:w-1/5 lg:h-[33vh]">
            <h2 className="text-2xl font-bold mb-4 my-5">Previsão de Safras</h2>
            <p className='text-xl'>
            Dados climáticos, agronômicos e tecnológicos para estimar com precisão a produção agrícola em uma determinada região em um período específico.
            </p>
          </div>

          {/* Segundo Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 mx-4 mt-8 w-full md:w-1/3 lg:w-1/5 lg:h-[33vh]">
            <h2 className="text-2xl font-bold mb-4 my-5">Otmização da Gestão</h2>
            <p className='text-xl'>
            Melhoria da gestão de recursos em geral, como água e fertilizantes, promovendo uma agricultura mais sustentável e econômica.
            </p>
          </div>

          {/* Terceiro Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 mx-4 mt-8 w-full md:w-1/3 lg:w-1/5 lg:h-[33vh]">
            <h2 className="text-2xl font-bold mb-4 my-5">Tomada de Decisões</h2>
            <p className='text-xl'>
            Decisões agrícolas mais precisas e eficientes, visando maximizar o rendimento e minimizar os desperdícios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
