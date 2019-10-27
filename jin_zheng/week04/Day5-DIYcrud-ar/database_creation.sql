CREATE TABLE houseplants (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	category TEXT,
	difficulty TEXT,
	rareness TEXT,
	water_demand TEXT,
	sunlight_demand TEXT,
	humidity TEXT,
	leaves_image TEXT,
	plant_image TEXT
);

INSERT INTO houseplants (name, category, difficulty, rareness, water_demand, sunlight_demand, humidity, leaves_image, plant_image) VALUES ("Fusion White", "Calathea", "Hard", "Very Rare", "Midium", "Low light", "High", "https://cdn.shopify.com/s/files/1/1714/1265/products/Photo_Jun_18_11_44_20_AM.jpg?v=1561060333", "https://interiorplants.ca/wp-content/uploads/2019/03/calathea-fusion-white-in-white-lisa.png" );


CREATE TABLE pests (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	pest_control TEXT,
	image TEXT
);

INSERT INTO pests (name, pest_control, image) VALUES ("Mealybug", "Soap spray, ladybird beetles", "https://www.growweedeasy.com/wp-content/uploads/2016/06/closeup-of-mealy-bug-a-common-cannabis-pest.jpg");

ALTER TABLE houseplants ADD COLUMN pest_id INTEGER;
ALTER TABLE pests ADD COLUMN plant_id INTEGER;

