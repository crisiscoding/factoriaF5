
DROP TABLE if exists fotos_favoritas_f5;


CREATE TABLE fotos_favoritas_f5(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `imagen` TEXT NOT NULL,
    `titulo` VARCHAR(255) NOT NULL
);

/* 

INSERT INTO fotos_favoritas_f5 (imagen, titulo)
  VALUES ("noidtestingtesting", "anotherimagefromdb");


  {
      imagen: "pruebadesdethunderclient",
      titulo: "titulodepruebablabla"
  } 
  
  
  
  */