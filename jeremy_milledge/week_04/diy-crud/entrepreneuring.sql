CREATE TABLE entrepreneuring (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_time DATETIME DEFAULT CURRENT_TIMESTAMP,
  title TEXT,
  category TEXT,
  description TEXT,
  links TEXT
);

INSERT INTO entrepreneuring (title, category, description, links) VALUES ('hoverboard', 'transport', 'flying skateboard', 'tonyhawk.com,vans.com');
INSERT INTO entrepreneuring (title, category, description, links) VALUES ('jetpack', 'transport', 'flying backpack', 'boeing.com,marvel.com')
