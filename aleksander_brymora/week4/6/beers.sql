CREATE TABLE beers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    percentage FLOAT,
    image TEXT,
    type_id INTEGER
);

INSERT INTO beers (name, percentage, image) VALUES ('Carlton Dry', 4.5, "https://media.danmurphys.com.au/dmo/product/809797-1.png?impolicy=PROD_MD");
INSERT INTO beers (name, percentage, image) VALUES ('Coopers', 6.3, "https://media.danmurphys.com.au/dmo/product/25600-1.png?impolicy=PROD_MD");
INSERT INTO beers (name, percentage, image) VALUES ('XXXX Bitter', 4.6, "https://media.danmurphys.com.au/dmo/product/64876-1.png?impolicy=PROD_MD");
INSERT INTO beers (name, percentage, image) VALUES ('Australian Brewery All Star Session', 4.2, "https://media.danmurphys.com.au/dmo/product/650878-1.png?impolicy=PROD_MD");