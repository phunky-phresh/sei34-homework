CREATE TABLE movies(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  year INTEGER,
  cover TEXT,  --URL for thumbnail of movie
  actors TEXT,
  synopsis TEXT,
  watched TEXT  --yes or no
);


--seed data we can use just teh aprt below in a text file to import data after database has the table above imported

INSERT INTO movies (title, year, watched) VALUES ("Pulp Fiction", 1994, "yes");
INSERT INTO movies (title, year, watched) VALUES ("Schindler's List", 1993, "yes");
INSERT INTO movies (title, year, watched) VALUES ("The Silence of the Lambs", 1991, "yes");
INSERT INTO movies (title, year, watched) VALUES ("The Lion King", 2019, "no");
INSERT INTO movies (title, year, watched) VALUES ("Casablanca", 1942, "no");
INSERT INTO movies (title, year, watched) VALUES ("Avengers: Infinity War", 2018, "yes");
INSERT INTO movies (title, year, watched) VALUES ("Forrest Gump", 1994, "yes");
