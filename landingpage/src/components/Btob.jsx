import React from "react";
import dinosauriobtob from "../assets/dinosauriobtob.png";

export default function Btob() {
  return (
    <div className="marketplace-container">
      <img className="marketplace-image" src={dinosauriobtob} alt="" />
      <div className="marketplace-content">
        <h2 className="titulo">Soluciones para Ecommerce</h2>
        <p>
          Ideal para testear el servicio dropshipping y comprar al por mayor sin
          cuota mensual.
        </p>
        <ul>
          <li className="li-maretplace">
            Compra mayorista Unidades sueltas a precio mayorista PVD, sin pedido
            mínimo.
          </li>
          <li className="li-maretplace">
            Acceso a catálogo completo de Winning Products y TopVentas (Bloqueo
            de stock).
          </li>
          <li className="li-maretplace">
            Amplio catálogo con primeras marcas, stock en Europa y entregas
            rápidas.
          </li>
          <li className="li-maretplace">
            Empieza tu negocio online a bajo coste.
          </li>
        </ul>
        <p>
          Maximiza tu presencia en el mercado con nuestras soluciones diseñadas
          para el éxito.
        </p>
        <a href="https://www.bigbuy.eu/es/soluciones-dropshipping-compra-por-mayor.html">
          <button className="btn-empieza">Descubrir el pack B2B</button>
        </a>
      </div>
    </div>
  );
}
