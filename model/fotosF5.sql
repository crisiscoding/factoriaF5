
DROP TABLE if exists fotos_favoritas_f5;


CREATE TABLE fotos_favoritas_f5(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `imagen` TEXT NOT NULL,
    `titulo` VARCHAR(255) NOT NULL
);



INSERT INTO fotos_favoritas_f5 (imagen, titulo)
  VALUES
("https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "bosque de Finlandia"),
("https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "feria de globos en Turquía"),
("https://images.unsplash.com/photo-1490604001847-b712b0c2f967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "amanecer en Nepal"),
("https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "tercera cascadita de islandia"),
("https://images.unsplash.com/photo-1444930694458-01babf71870c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "amapolas"),
("https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "arbolito en Kenia"),
("https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "otoño en Colorado"),
("https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "barquito en Austria"),
("https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "concierto en el metro"),
("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", "concierto en París"),
("https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", "globitos");
  
 