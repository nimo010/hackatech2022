import React from "react";
import "./ListadoCarreras.css";
import carreras from "../../data/carreras.json";
import CardCarrera from "../CardCarrera/CardCarrera";

export default function ListadoCarreras() {
  return (
    <div className="listado-carreras">
      {carreras.map((carrera, idx) => (
        <CardCarrera key={idx} carrera={carrera} />
      ))}
    </div>
  );
}
