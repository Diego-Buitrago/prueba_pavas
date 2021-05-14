CREATE DATABASE prueba_practica;

DROP TABLE IF EXISTS prueba_practica;

CREATE TABLE viviendas(
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(20) NOT NULL ,
    zona VARCHAR(20) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    dormitorios VARCHAR(2) NOT NULL,
    precio INTEGER NOT NULL,
    tamano INTEGER NOT NULL,
    observaciones VARCHAR(200)
);