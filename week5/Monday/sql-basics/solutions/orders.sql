CREATE TABLE orders ( order_id SERIAL PRIMARY KEY, person_id INTEGER, product_name VARCHAR(40), product_price NUMERIC, quantity INTEGER );

INSERT INTO orders ( person_id, product_name, product_price, quantity ) 
VALUES ( 1, 'Apples', 1.50, 2 ),
( 1, 'Oranges', 4.50, 1 ),
( 2, 'Pineapple', 8.00, 2 ),
( 3, 'Kiwi', 3.50, 6 ),
( 3, 'Watermelon', 10.45, 4 );

SELECT * FROM orders;

SELECT SUM(quantity) FROM orders;

SELECT SUM(product_price * quantity) FROM orders;

SELECT SUM(product_price * quantity) FROM orders WHERE person_id = 3;