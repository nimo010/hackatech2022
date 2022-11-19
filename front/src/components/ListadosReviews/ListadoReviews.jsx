import React from "react";
import "./ListadoReviews.css";
import carreras from "../../data/carreras.json";
import CardCarrera from "../CardCarrera/CardCarrera";

export default function ListadoReviews() {
  return (
    <div className="listado-reviews">
      {carreras.map((carrera, idx) => (
        <CardCarrera key={idx} carrera={carrera} />
      ))}
    </div>
  );
}
