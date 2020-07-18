### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers_db
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    eaten BOOLEAN DEFAULT falsse, 
    PRIMARY KEY (id)
)