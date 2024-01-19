import React from "react";
import "../style.css"; // Archivo de estilos CSS para el componente
import dinosauriomarketplace from "../assets/dinosaurio-marketplace.png";

const MarketplaceInfo = () => {
  return (
    <div className="marketplace-container">
      <img
        src={dinosauriomarketplace}
        alt="Marketplace-image"
        className="marketplace-image"
      />
      <div className="marketplace-content">
        <h2 className="titulo">Soluciones para Marketplaces</h2>
        <p>
          Transforma tu eCommerce en un Marketplace de Éxito con nuestras
          soluciones:
        </p>
        <ul>
          <li className="li-maretplace">
            Formalizamos partnerships con todos los marketplaces europeos.
          </li>
          <li className="li-maretplace">
            Desarrollamos una estrategia de éxito conjunta entre BigBuy y cada
            marketplace.
          </li>
          <li className="li-maretplace">
            Gestionamos marcas en marketplaces, con nuestro Full-service
            Marketplaces Operations.
          </li>
          {/* Agrega el resto de los puntos aquí */}
        </ul>
        <p>
          ¡Descubre más sobre nuestras completas Operaciones en Marketplaces!
        </p>
        <a href="https://www.bigbuy.eu/es/soluciones-dropshipping-compra-por-mayor.html">
          <button className="btn-empieza">Descubrir el pack marketplace</button>
        </a>
      </div>
    </div>
  );
};

export default MarketplaceInfo;
