import React from 'react'
import "./servicos.css"

const data = [
  {
    id: 1,
    title: "Previsão de Safras",
    description:
      "Dados climáticos, agronômicos e tecnológicos para estimar com precisão a produção agrícola em uma determinada região em um período específico.",
  },
  {
    id: 2,
    title: "Otmização da Gestão",
    description:
      "Melhoria da gestão de recursos em geral, como água e fertilizantes, promovendo uma agricultura mais sustentável e econômica."
  },
  {
    id: 3,
    title: "Tomada de Decisões",
    description:
      "Decisões agrícolas mais precisas e eficientes, visando maximizar o rendimento e minimizar os desperdícios.",
  },
];

const Servicos = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title">Sistema AgroSync</h2>

      <div className="services__container grid">
        {data.map(({ id, title, description }) => {
          return (
            <div className="services__card" key={id}>

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Servicos