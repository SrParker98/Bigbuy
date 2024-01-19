import React from "react";

export default function Packs() {
  return (
    <div className="landing-packs">
      <div>
        <div className="tarjeta">
          <h2 className="titulo">Marketplace</h2>
          <p className="precio">99,17€/mes</p>
          <span>Cuota de alta 87€</span>
          <ul className="beneficios-lista">
            <li>Acceso ilimitado a productos exclusivos.</li>
            <li>Envío gratuito en todos los pedidos.</li>
            <li>Soporte prioritario las 24 horas.</li>
            <a>Más información</a>
          </ul>
          <button className="btn-empieza">¡Empieza Ya!</button>
        </div>
      </div>
      <div>
        <div className="tarjeta">
          <h2 className="titulo">Ecomerce</h2>
          <p className="precio">74,17€/mes</p>
          <span>Cuota de alta 87€</span>
          <ul className="beneficios-lista">
            <li>Acceso ilimitado a productos exclusivos.</li>
            <li>Envío gratuito en todos los pedidos.</li>
            <li>Soporte prioritario las 24 horas.</li>
            <a>Más información</a>
          </ul>
          <button className="btn-empieza">¡Empieza Ya!</button>
        </div>
      </div>
      <div>
        <div className="tarjeta">
          <h2 className="titulo">B2B</h2>
          <p className="precio">0€/mes</p>
          <span>Cuota de alta 87€</span>
          <ul className="beneficios-lista">
            <li>Acceso ilimitado a productos exclusivos.</li>
            <li>Envío gratuito en todos los pedidos.</li>
            <li>Soporte prioritario las 24 horas.</li>
            <a>Más información</a>
          </ul>
          <button className="btn-empieza">¡Empieza Ya!</button>
        </div>
      </div>
    </div>
  );
}
