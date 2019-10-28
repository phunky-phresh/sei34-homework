CREATE TABLE animals(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  diet TEXT,
  image TEXT,
  habitat_id INTEGER
);


INSERT INTO animals (name, diet) VALUES ("Lion", "carnivore");
INSERT INTO animals (name, diet) VALUES ("Bear", "omnivorous");
