import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Packs from "./packs";
import dinosaurio from "../assets/dinosaurio.png";
import bg from "../assets/bg.jpeg";
import { IoIosArrowDown } from "react-icons/io";
const Aterrizage = () => {
  return (
    <div className="aterrizage">
      <h1 className="title-landing">
        Lo que no te han contado sobre vender online...
      </h1>
      <Packs />
      <div className="landing-checks">
        <h3>En solo 3 pasos podras:</h3>
        <li className="li-landing">
          Crear tu tienda de forma fácil e intuitiva
        </li>
        <li className="li-landing">
          Encontrar miles de proveedores y clientes
        </li>
        <li className="li-landing">
          Empezar a vender online de manera profesional
        </li>
      </div>
      <div className="arrow-landing">
        <IoIosArrowDown className="arrow-1" />
        <IoIosArrowDown className="arrow-2" />
      </div>
    </div>
  );
};

export default Aterrizage;
