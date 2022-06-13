import React from "react";
import "./fotogrid.css";
import { Link } from "react-router-dom";
export default function fotogrid(props) {
  return (
    <div>
      <div className="Searchbar">
        <Link to={`/nueva`}>Añadir imagen</Link>
      </div>
      <div className="Grid">
        {props.fotos.map((i) => (
          <div className="unit" key={i.id}>
            <Link to={`/editar/${i.id}`}>
              <img className="img" src={i.imagen} alt={i.titulo} />
            </Link>
            <h5>{i.titulo}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
