CREATE TABLE continents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  size TEXT,
  population TEXT,
  numofcountries INTEGER,
  fact TEXT,
  image TEXT --url of photo
);

INSERT INTO continents (name, size, population, numofcountries, fact, image) VALUES ("Asia", "44,579,000 sq. km", "4,436,224,000", 48, "Asia is the world's largest continent of the seven continents in size and population", "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201809/asia-647x2096.jpg?GU.M3UYGZsTQeFQi.NRwDeRGMX2MJSEL");
INSERT INTO continents (name, size, population, numofcountries, fact, image) VALUES ("Africa", "30,221,532 sq km", "1,216,130,000", 54, "The world's longest river -- the Nile -- and the world's largest desert -- the Sahara -- both are home in Africa", "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201809/Africa-647x1164.jpg?4VRELNNSA8dQ3LPwU6QogyS1DguzGBgZ");
