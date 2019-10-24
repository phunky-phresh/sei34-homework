CREATE TABLE spoons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  rating INTEGER,
  image TEXT
);

INSERT INTO spoons (name, description, rating) VALUES ('Table Spoon', 'Common every day', 9);
INSERT INTO spoons (name, description, rating) VALUES ('Tea Spoon', 'mixing tea or coffee', 7);
