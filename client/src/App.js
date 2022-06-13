import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Fotogrid from "./components/fotogrid";
import Editfoto from "./components/editfoto";
import "./App.css";

function App() {
  const [fotos, setFotos] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getFotos();
  }, []);

  //working
  async function getFotos() {
    let dataURL = `/fotos`;

    try {
      let response = await fetch(dataURL);
      if (response.ok) {
        let data = await response.json();

        setFotos(data);
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError(`Network error: ${error.message}`);
    }
  }

  async function addFoto(f) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(f),
    };
    let data = null;
    try {
      let response = await fetch("/fotos", options);
      if (response.ok) {
        data = await response.json();
        setFotos(data);
      } else {
        console.log("server error:", response.statusText);
      }
    } catch (e) {
      console.log("network error:", e.message);
    }
    return data;
  }

  async function editFoto(id, mod) {
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mod),
    };

    let data = null;
    try {
      let response = await fetch(`/fotos/${id}`, options);
      if (response.ok) {
        data = await response.json();
        setFotos(data);
      } else {
        console.log("server error:", response.statusText);
      }
    } catch (e) {
      console.log("network error:", e.message);
    }
  }

  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Fotogrid fotos={fotos} />} />
          <Route
            path="/nueva"
            element={<Editfoto addFoto={(f) => addFoto(f)} />}
          />
          <Route
            path="editar/:id"
            element={<Editfoto editFoto={(id, mod) => editFoto(id, mod)} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
