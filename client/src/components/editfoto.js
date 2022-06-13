import React, { useState } from "react";
import "./editfoto.css";
import { Route, Routes } from "react-router-dom";

const EMPTY_FORM = {
  imagen: "",
  titulo: "",
};

export default function Editfoto(props) {
  const [foto, setFoto] = useState(EMPTY_FORM);
  const [preview, setPreview] = useState("");

  const handlePreview = (e) => {
    //for pic preview, should simplify
    const { name, value } = e.target;
    setPreview(() => ({ ...preview, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoto((foto) => ({
      ...foto,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addFoto(foto);
    setFoto(EMPTY_FORM);
  };

  return (
    <div>
      <img src={preview.picture} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Imagen
            <input
              type="text"
              name="imagen"
              value={foto.imagen}
              onChange={handleInputChange}
              onInput={handlePreview}
            />
          </label>
        </div>
        <div>
          <label>
            Título
            <input
              type="text"
              name="titulo"
              value={foto.titulo}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
}
