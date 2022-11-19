import React from 'react'
import './ListadoReviews.css'
import { Link } from "react-router-dom";

export default function ListadoReviews() {
  return (
    <div className='card'>
        <Link to='/Carrera'>
        <p>UNIVERSIDAD</p>
        <p>CARRERA</p>
        <img src='/'alt='foto'></img>
        </Link>
    </div>
  )
}
