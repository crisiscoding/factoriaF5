import React, { useState, useEffect } from "react";
import "./editfoto.css";
import { useNavigate, useParams } from "react-router-dom";

const EMPTY_FORM = {
  imagen: "",
  titulo: "",
};

export default function Editfoto(props) {
  const [foto, setFoto] = useState({});
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState();
  let { id } = useParams();
  useEffect(() => {
    editarFoto();
  }, []);

  //this sends the clicked-on picture to the edit form
  async function editarFoto() {
    let dataURL = `../fotos/${id}`;

    try {
      let response = await fetch(dataURL);
      if (response.ok) {
        let data = await response.json();
        setPreview(() => ({ ...preview, imagen: data[0].imagen }));
        setFoto(data[0]);
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError(`Network error: ${error.message}`);
    }
  }

  const handlePreview = (e) => {
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
    if (id) {
      props.editFoto(id, foto);
    } else {
      props.addFoto(foto);
    }
    setFoto(EMPTY_FORM);
    navigate(`/fotos`);
  };

  return (
    <div>
      <img alt="" src={preview.imagen} />
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
