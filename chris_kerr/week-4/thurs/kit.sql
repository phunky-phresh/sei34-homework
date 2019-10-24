CREATE TABLE kit (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item TEXT,
    sport TEXT,
    quantity INTEGER,
    image TEXT
);

INSERT INTO kit (item, sport, quantity) VALUES ('Harness', 'Climbing', 2);
INSERT INTO kit (item, sport, quantity) VALUES ('Shoes', 'Climbing', 2);
INSERT INTO kit (item, sport, quantity) VALUES ('Shoes', 'Running', 3);