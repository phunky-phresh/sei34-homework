CREATE TABLE desserts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  type TEXT,
  image TEXT
);

INSERT INTO desserts (name, type) VALUES ('Cookies and cream', 'ice cream');
INSERT INTO desserts (name, type) VALUES ('Pavlova', 'cake');
INSERT INTO desserts (name, type, image) VALUES ('Red Velvet', 'cupcake', 'https://www.bostongirlbakes.com/wp-content/uploads/2012/04/IMG_6812.jpg');
