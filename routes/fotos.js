var express = require("express");
var router = express.Router();
const db = require("../model/helper");
const fs = require("fs/promises");
//const path = require("path");

//working on thunderclient
router.get("/", async (req, res, next) => {
  try {
    let results = await db(`SELECT * FROM fotos_favoritas_f5 ORDER BY id ASC;`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//working on thunderclient
router.get("/:id", async (req, res, next) => {
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM fotos_favoritas_f5 WHERE id= ${id};`);
    if (result.data.length === 1) {
      res.send(result.data);
    } else {
      res.status(404).send({ err: err.message });
    }
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});

//working on thunderclient
router.post("/", async (req, res) => {
  let { imagen, titulo } = req.body;

  //todo el lio de imagenes, maybe check later

  let sql = `
  INSERT INTO fotos_favoritas_f5 (imagen, titulo)
  VALUES ('${imagen}', '${titulo}')`;

  try {
    await db(sql);
    let result = await db(`SELECT * FROM fotos_favoritas_f5`);
    res.send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//falta patch

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM fotos_favoritas_f5 WHERE  id = ${id}`);
    if (result.data.length === 1) {
      await db(`DELETE FROM fotos_favoritas_f5 WHERE id= ${id}`);
      result = await db(`SELECT * FROM fotos_favoritas_f5`);
      res.send(result.data);
    } else {
      res.status(404).send({ error: "Item not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
