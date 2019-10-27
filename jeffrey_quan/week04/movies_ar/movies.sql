CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year INTEGER,
  genre TEXT,
  image TEXT,
  director_id INTEGER
);

INSERT INTO movies (name, year, genre, image, director_id) VALUES ('Inception', 2010, 'Thriller', '', 1);
INSERT INTO movies (name, year, genre, image, director_id) VALUES ('The Departed', 2006, 'Crime', '', 2);
INSERT INTO movies (name, year, genre, image, director_id) VALUES ('Memento', 2000, 'Mystery', '', 1);
INSERT INTO movies (name, year, genre, image, director_id) VALUES ('The Wolf of Wall Street', 2013, 'Comedy', '', 2);
INSERT INTO movies (name, year, genre, image, director_id) VALUES ('Inglourious Basterds', 2009, 'Adventure', '', 3);
INSERT INTO movies (name, year, genre, image, director_id) VALUES ('Pulp Fiction', 1994, 'Crime', '', 3);
