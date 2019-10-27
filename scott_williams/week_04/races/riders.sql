CREATE TABLE riders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  team TEXT,
  country TEXT,
  image TEXT -- URL for photo of a rider
);

-- seed data
INSERT INTO riders (name, team, country) VALUES ('Cadel Evans', 'BMC', 'Australia');
INSERT INTO riders (name, team, country) VALUES ('Lance Armstrong', 'USP', 'USA');
