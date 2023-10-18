import React from 'react';
import './produto.css';

const Produto = () => {
  return (
    <section className="product container section" id="product">
      <h2 className="section__title">Nosso Produto</h2>

      <div className="product__container grid">
        <table className="product__table">
          <thead>
            <tr>
              <th></th>
              <th>Coluna 1</th>
              <th>Coluna 2</th>
              <th>Coluna 3</th>
              <th>Coluna 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Café</th>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <th>Milho</th>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <th>Laranja</th>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Produto;
