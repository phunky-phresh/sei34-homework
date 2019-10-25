CREATE TABLE types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    summary TEXT,
    description TEXT,
    altitude_range TEXT,
    height_id INTEGER
);

CREATE TABLE heights (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

INSERT INTO heights (name) VALUES ('High');
INSERT INTO heights (name) VALUES ('Middle');
INSERT INTO heights (name) VALUES ('Low');

INSERT INTO types (name, summary, description, altitude_range, height_id) VALUES ('Stratus', 'Low, featureless layer', 'Grey, featureless, low-altitude cloud capable of ground contact', '0-2km', 3);
INSERT INTO types (name, summary, description, altitude_range, height_id) VALUES ('Cirrus', 'High, wispy streaks', 'High-altitude, thin, and wispy cloud streaks made of ice crystals', '5-15km', 1);