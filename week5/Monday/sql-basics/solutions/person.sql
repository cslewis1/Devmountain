CREATE TABLE person(
id SERIAL PRIMARY KEY, 
name VARCHAR(40), 
age FLOAT, 
height INTEGER, 
city VARCHAR(40),
favorite_color VARCHAR(40)
);

INSERT INTO person(name, age, height, city, favorite_color)
VALUES ('Alicia Keys', 31, 200,'Smyrna', 'Red' ),
('Jill Scott', 41, 220,'Buckhead', 'Orange' ),
('Cleo Soul', 29, 190,'Decatur', 'Purple' ),
('John Legend', 47, 250,'Atlanta', 'Blue' ),
('Ron Isley', 80, 270,'Powder Springs', 'Black' );

SELECT * FROM person ORDER BY height DESC

SELECT * FROM person ORDER BY height

SELECT * FROM person ORDER BY age DESC

SELECT * FROM person WHERE age > 20

SELECT * FROM person WHERE age = 18

SELECT * FROM person WHERE age < 20 OR age > 30

SELECT * FROM person WHERE age != 27

SELECT * FROM person WHERE favorite_color != 'Red'

SELECT * FROM person WHERE favorite_color != 'Red' AND favorite_color != 'Blue' 

SELECT * FROM person WHERE favorite_color = 'Orange' OR favorite_color = 'Green' 

SELECT * FROM person WHERE favorite_color IN ('Orange', 'Green', 'Blue')

SELECT * FROM person WHERE favorite_color IN ('Yellow', 'Purple')