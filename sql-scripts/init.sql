CREATE DATABASE IF NOT EXISTS sanar;

USE sanar;

CREATE TABLE sanar.exemplo (
	id INT auto_increment NOT NULL,
	description varchar(100) NOT NULL,
	CONSTRAINT exemplo_PK PRIMARY KEY (id)
);

INSERT INTO sanar.exemplo (description)
VALUES
('Ex1'),
('Ex2');