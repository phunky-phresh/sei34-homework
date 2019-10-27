CREATE TABLE surfboards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  brand TEXT,
  type TEXT,
  image TEXT -- URL for photo of a surfboard
);

-- seed data
INSERT INTO surfboards (name, brand) VALUES ('MM', 'Byrne');
INSERT INTO surfboards (name, brand) VALUES ('Mullett', 'Byrne');
INSERT INTO surfboards (name, brand, image) VALUES ('Spitfire', 'Firewire','https://firewiresurfboards.com/wp-content/uploads/2018/11/Spitfire_660x500_HE_Top__61550.1543191813.1280.1280.jpg');
