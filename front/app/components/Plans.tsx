import React from 'react';

const Plans = () => {
  return (
    <div id='Plans' className="relative min-h-[100vh] flex items-center justify-center bg-beige">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Pacotes</h1>
        <p className='text-xl font-bold'>(Modelo de Negócio)</p>

        <div className="flex flex-wrap justify-center">
          {/* Plano Simple */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mx-4 mt-8 w-full md:w-1/3 lg:w-1/4 lg:h-[57vh]">
            <h2 className="text-2xl font-bold mb-4 text-gray-500">Simple</h2>
            <ul className="text-lg text-left">
              <li className='mt-10'><b>Previsão Básica de Safras: </b>Acesso ao sistema para obter previsões básicas de safras com base nos dados climáticos analisados.</li>
              <br />
              <li><b>Suporte Técnico Padrão: </b>Suporte ao cliente para resolver problemas técnicos relacionados à plataforma.</li>
              <br />
              <li><b>Treinamento Básico: </b>Treinamento inicial sobre como interpretar e usar as previsões de safras.</li>
            </ul>
          </div>

          {/* Plano Gold */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mx-4 mt-8 w-full md:w-1/3 lg:w-1/4 lg:h-[57vh]">
            <h2 className="text-2xl font-bold mb-4 text-yellow-600">Gold</h2>
            <ul className="text-lg text-left">
              <li><b>Previsão Avançada de Safras: </b>Além das previsões básicas, oferece análises mais detalhadas e insights para otimizar a produção.</li>
              <li className='mt-3'><b>Suporte Técnico Prioritário: </b>Suporte com prioridade para resolução rápida de problemas.</li>
              <li className='mt-3'><b>Treinamento Avançado: </b>Treinamento mais abrangente para interpretar e aplicar as previsões de safras.</li>
              <li className='mt-3'><b>Acesso Exclusivo a Webinars Especializados: </b>Participação em webinars com especialistas agrícolas.</li>
            </ul>
          </div>

          {/* Plano Premium */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mx-4 mt-8 w-full md:w-1/3 lg:w-1/4 lg:h-[57vh]">
            <h2 className="text-2xl font-bold mb-4 text-teal-600">Premium</h2>
            <ul className="text-base text-left">
              <li><b>Previsão Avançada de Safras com Análise de Dados em Tempo Real:  </b>Oferece previsões avançadas junto com análises em tempo real para tomada de decisões imediatas.</li>
              <li className='mt-3'><b>Suporte Técnico Prioritário 24/7:</b>Suporte técnico disponível 24 horas por dia, 7 dias por semana.</li>
              <li className='mt-3'><b>Treinamento Personalizado: </b>Treinamento personalizado e consultoria agrícola para maximizar os benefícios da tecnologia.</li>
              <li className='mt-3'><b>Acesso Exclusivo a Workshops: </b>Participação em workshops presenciais com especialistas agrícolas.</li>
              <li className='mt-3'><b>Atualizações de Tecnologia Prioritárias: </b>Acesso antecipado a novas funcionalidades e atualizações.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
