CREATE TABLE cars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  model TEXT,
  brand TEXT,
  type TEXT,
  year INTEGER,
  price INTEGER,
  image TEXT
);

INSERT INTO cars (model, brand, type, year, price) VALUES ('F8 Spider', 'Ferrari', 'Convertible', 2020, 530000);
INSERT INTO cars (model, brand, type, year, price) VALUES ('Huracan', 'Lamborghini', 'Coupe', 2018, 300000);
INSERT INTO cars (model, brand, type, year, price) VALUES ('Chiron', 'Bugatti', 'Sport', 2019, 3000000);
