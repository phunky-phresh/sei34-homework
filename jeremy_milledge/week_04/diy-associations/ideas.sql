CREATE TABLE ideas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_time DATETIME DEFAULT CURRENT_TIMESTAMP,
  title TEXT,
  category TEXT,
  description TEXT
);

INSERT INTO ideas (title, category, description) VALUES ('hoverboard', 'transport', 'flying skateboard');
INSERT INTO ideas (title, category, description) VALUES ('jetpack', 'transport', 'flying backpack');
