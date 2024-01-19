import React, { useState } from "react";
import ReactGA from "react-ga";

const Cookies = () => {
  // Estado para controlar si las políticas de cookies han sido aceptadas o rechazadas
  const [cookiesAccepted, setCookiesAccepted] = useState(
    localStorage.getItem("cookiesAccepted") === "true"
  );

  // Función para manejar la aceptación de las políticas de cookies
  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);

    // Inicializa y activa Google Analytics
    ReactGA.initialize("TU_CÓDIGO_DE_ANALYTICS"); // Reemplaza "TU_CÓDIGO_DE_ANALYTICS" con tu propio ID de seguimiento

    // Activa Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "TU_CÓDIGO_DE_TAG_MANAGER"); // Reemplaza "TU_CÓDIGO_DE_TAG_MANAGER" con tu propio ID de contenedor de Google Tag Manager

    // Implementa etiquetas meta
    const metaElement = document.createElement("meta");
    metaElement.name = "nombre_de_meta"; // Reemplaza "nombre_de_meta" con el nombre real de la etiqueta meta
    metaElement.content = "contenido_de_meta"; // Reemplaza "contenido_de_meta" con el contenido real de la etiqueta meta
    document.head.appendChild(metaElement);

    // Implementa el píxel de LinkedIn Insight Tag
    const linkedinTag = document.createElement("script");
    linkedinTag.type = "text/javascript";
    linkedinTag.text = `
      _linkedin_partner_id = "TU_ID_DE_LINKEDIN"; // Reemplaza "TU_ID_DE_LINKEDIN" con tu propio ID de LinkedIn Insight Tag
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `;
    document.body.appendChild(linkedinTag);
  };

  // Función para manejar el rechazo de las políticas de cookies
  const handleRejectCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setCookiesAccepted(false);

    // Lógica para desactivar o eliminar las implementaciones de seguimiento y cookies
    // Ejemplo: Desactivar Google Analytics
    if (typeof window.gtag === "function") {
      window.gtag("config", "TU_CÓDIGO_DE_ANALYTICS", {
        send_page_view: false,
      });
    }

    // Ejemplo: Eliminar el píxel de LinkedIn Insight Tag
    const linkedinTag = document.getElementById("linkedin-insight-tag");
    if (linkedinTag) {
      linkedinTag.remove();
    }

    // Otras implementaciones pueden requerir lógica personalizada para desactivarlas o eliminarlas.
  };

  return (
    <div className="cookie-policy">
      {!cookiesAccepted && (
        <div className="cookie-policy-content">
          <p>
            Este sitio web utiliza cookies para mejorar la experiencia del
            usuario. Al continuar navegando en este sitio, aceptas nuestro uso
            de cookies.
          </p>
          <div className="cookie-buttons">
            <button onClick={handleAcceptCookies} className="accept-button">
              Aceptar
            </button>
            <button onClick={handleRejectCookies} className="reject-button">
              Rechazar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookies;
