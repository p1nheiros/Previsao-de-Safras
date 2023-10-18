import React from 'react';
import "./pacotes.css";
import Data from './Data';
import Card from "./Card";

const Pacotes = () => {
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section__title">Pacotes</h2>

      <div className="resume__container grid">

        <div className="timeline grid">

          <h2 className='timeline__prim'>
            Standard
          </h2>
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              )
            }
            return null;
          })}
        </div>

        <div className="timeline grid">

          <h2 className='timeline__prim'>
            Premium
          </h2>
          {Data.map((val, index) => {
            if (val.category === "experience") {

              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              )
            }
            return null;
          })}
        </div>

      </div>
    </section>
  )
}

export default Pacotes;
