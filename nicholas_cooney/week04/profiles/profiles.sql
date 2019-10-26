CREATE TABLE profiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  skill TEXT,
  image TEXT,
  description TEXT,
  terrain_id INTEGER
);

INSERT INTO profiles (name, skill) VALUES ('Camber', 'Advanced');
