import React from 'react';
import "./sobre.css";
import Pitch_SupriTech from '../../assets/Pitch_SupriTech.pptx.pdf';

const Sobre = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">Sobre a AgroSync</h2>

      <div className="about__container grid">

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            Somos agentes de mudança, alavancando a tecnologia para solucionar problemas complexos na produção de safras e melhorar a qualidade dos processos de previsão, revolucionando a forma como os serviços são prestados e recebidos.
             </p>
            <a href={Pitch_SupriTech} className="btn" download>Download Pitch</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">Precisão</h3>
                <span className="skills__number">100%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">Aproveitamento</h3>
                <span className="skills__number">100%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">Otimização</h3>
                <span className="skills__number">100%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage programming"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre