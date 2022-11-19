import React from "react";
import "./CardCarrera.css";

export default function CardCarrera({ carrera }) {
  return (
    <div className="card">
      <p>{carrera.universidad}</p>
      <p>{carrera.nombre}</p>
      <img src="/" alt="foto"></img>
    </div>
  );
}
