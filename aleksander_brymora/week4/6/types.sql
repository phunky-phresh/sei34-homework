CREATE TABLE types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    image TEXT
);

INSERT INTO types (name, description, image) VALUES ('Stout', 'Stout is a dark, top-fermented beer with a number of variations, including dry stout, Baltic porter, milk stout, and imperial stout.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Stadin_Panimo_Double_Oat_Malt_Stout.jpg/800px-Stadin_Panimo_Double_Oat_Malt_Stout.jpg');
INSERT INTO types (name, description, image) VALUES ('Lager', 'Lager is a type of beer conditioned at low temperatures.[1] Lagers can be yellow pale, amber, or dark. Pale lager is the most widely consumed and commercially available style of beer.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bitburger_Glass.JPG/1920px-Bitburger_Glass.JPG');
INSERT INTO types (name, description, image) VALUES ('IPA', 'India pale ale (IPA) is a hoppy beer style within the broader category of pale ale.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Fuller%27s_India_pale_ale.jpg/800px-Fuller%27s_India_pale_ale.jpg');