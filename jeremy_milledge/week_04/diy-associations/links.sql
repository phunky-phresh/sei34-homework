CREATE TABLE links (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  url TEXT,
  idea_id INTEGER
);

INSERT INTO links (name, url) VALUES ('Google', 'https://www.google.com.au/');
