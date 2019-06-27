CREATE DATABASE db_topi;

USE db_topi;

-- TABLA USUARIOS
CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(40) NOT NULL,
    userlastname VARCHAR(40) NOT NULL,
    password VARCHAR(40) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

ALTER TABLE users
    ADD email VARCHAR(40) NOT NULL;

ALTER TABLE users
    MODIFY password VARCHAR(100) NOT NULL; 

ALTER TABLE users
    DROP email;

ALTER TABLE users
    DROP userlastname;

ALTER TABLE users
    ADD fullname VARCHAR(40) NOT NULL;

DESCRIBE users;

-- TABLA PRODUCTOS
CREATE TABLE products (
    id INT(11) NOT NULL,
    sku INT(11) NOT NULL,
    nombre VARCHAR(40) NOT NULL,
    talla VARCHAR(3) NOT NULL,
    precio INT(5) NOT NULL,
    cantidad INT(5) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    categoria VARCHAR(60) NOT NULL,
    foto BLOB NOT NULL
);

ALTER TABLE products
    ADD PRIMARY KEY (id);

ALTER TABLE products
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

ALTER TABLE products
    MODIFY foto BLOB;

ALTER TABLE products
    MODIFY foto VARCHAR(100);
    
DESCRIBE products;

--Tabla carrito
CREATE TABLE cart (
    id INT(11) NOT NULL,
    sku INT(11) NOT NULL,
    nombre VARCHAR(40) NOT NULL,
    precio INT(5) NOT NULL,
    cantidad INT(5) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    foto VARCHAR(100) NOT NULL
);

ALTER TABLE cart
    ADD PRIMARY KEY (id);

ALTER TABLE cart
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE cart;

-- TABLA ADMIN
CREATE TABLE admins(
    id INT(11) NOT NULL,
    username VARCHAR(40) NOT NULL,
    fullname VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL
);

ALTER TABLE admins
    ADD PRIMARY KEY (id);

ALTER TABLE admins
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE admins;

INSERT INTO admins (id, username, password, fullname) VALUES (1, "admin@topi.com", "admin","Admin");