CREATE TABLE races (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event TEXT, -- Event name
  country TEXT,
  stages INTEGER, -- Number of stages
  image TEXT -- URL for photo of a butterfly
);

-- seed data
INSERT INTO races (event, country) VALUES ('Tour De France', 'France');
INSERT INTO races (event, country) VALUES ('Tour Down Under', 'Australia');
