import React from "react";
import "./fotogrid.css";
import { Route, Routes, Link } from "react-router-dom";
export default function fotogrid(props) {
  //falta enlace a añadir nueva
  return (
    <div>
      <div>
        <Link to={`/nueva`}>Añadir imagen</Link>
      </div>
      <div>
        {props.fotos.map((i) => (
          <div key={i.id}>
            <Link to={`/edit/${i.id}`}>
              <img
                className="img"
                src={i.imagen}
                alt={i.titulo}
                //onClick={() => props.showItem(i)}
              />
            </Link>
            <h5>{i.titulo}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
