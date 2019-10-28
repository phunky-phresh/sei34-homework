CREATE TABLE countries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  capitalcity TEXT,
  languages TEXT,
  visited BOOLEAN, --1 for true or 0 for false
  flag TEXT, --url for a photo of a flag
  image TEXT --url for a photo of the country
);


INSERT INTO countries (name, capitalcity, languages, visited, flag) VALUES ('Philippines', 'Manila', 'Filipino and English', 1, 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Philippines.png');
INSERT INTO countries (name, capitalcity, languages, visited, flag) VALUES ('United States of America', 'Washington DC', 'English', 1, 'https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png');
INSERT INTO countries (name, capitalcity, languages, visited, flag) VALUES ('Australia', 'Canberra', 'English', 1, 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Australia.png');
