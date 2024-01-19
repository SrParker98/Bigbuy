import React from "react";
import dinosaurioplaya from "../assets/dinosaurioplaya.png";
export default function Ecommerce() {
  return (
    <div className="ecommerce-container">
      <div className="">
        <h2 className="titulo">Soluciones para Ecommerce</h2>
        <p>Impulsa tu negocio en línea con nuestras soluciones:</p>
        <ul>
          <li className="li-maretplace">
            Integración sencilla en tiempo real de catálogos y pedidos.
          </li>
          <li className="li-maretplace">
            Envío dropshipping anónimo con entrega rápida en Europa.
          </li>
          <li className="li-maretplace">
            Precios mayoristas sin pedido mínimo.
          </li>
          <li className="li-maretplace">
            Stock en Europa con certificados de calidad.
          </li>
        </ul>
        <p>Expande tu negocio en línea de manera eficaz y rentable.</p>
        <a href="https://www.bigbuy.eu/es/soluciones-dropshipping-compra-por-mayor.html">
          <button className="btn-empieza">Descubrir el pack ecommerce</button>
        </a>
      </div>
      <img className="marketplace-image" src={dinosaurioplaya} alt="" />
    </div>
  );
}
