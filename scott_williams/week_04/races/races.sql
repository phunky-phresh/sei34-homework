CREATE TABLE races (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event TEXT, -- Event name
  nickname TEXT,
  country TEXT,
  stages INTEGER, -- Number of stages
  image TEXT, -- URL for photo of a race
  rider_id INTEGER
);

-- seed data
INSERT INTO races (event, country, stages) VALUES ('Tour De France', 'France', 22);
INSERT INTO races (event, country) VALUES ('Tour Down Under', 'Australia');
