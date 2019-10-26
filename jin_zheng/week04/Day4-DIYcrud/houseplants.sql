CREATE TABLE houseplants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type TEXT,
    water_demand INTEGER,
    sunlight_demand INTEGER,
    rareness INTEGER,
    image TEXT
);

INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness, image) VALUES ('Peace Lily', 'Spathiphyllum', 4, 3, 1, "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1564153137/products/peace-lily-1530c2.jpg");
INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Spathiphyllum Picasso', 'Spathiphyllum', 2, 3, 3);
INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Spathiphyllum Domino', 'Spathiphyllum', 2, 3, 2);

INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Philodendron Hope', 'Philodendron', 3, 3, 1);
INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('White princess', 'Philodendron', 3, 3, 3);
INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Pink princess', 'Philodendron', 3, 3, 2);
INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Philodendron Obliqua', 'Philodendron', 3, 3, 3);
INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Variegated Golden Dragon', 'Philodendron', 3, 3, 5);

INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Monstera Deliciosa', 'Monstera', 3, 4, 1);
INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Variegated Monstera Deliciosa', 'Monstera', 2, 4, 4);
INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Swiss Cheese', 'Monstera', 3, 3, 2);
INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Variegated Swiss Cheese', 'Monstera', 3, 3, 5);

INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Fusion White', 'Calathea', 3, 3, 3);

INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('Snow Queen', 'Hoya', 3, 2, 3);

INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ('String of Dolphins', 'Succulent', 2, 2, 2);

INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ("Mother in Law's tongue", 'Sansevieria', 1, 1, 1);

INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness) VALUES ("Parlor Palm", 'Palm', 2, 2, 1);
