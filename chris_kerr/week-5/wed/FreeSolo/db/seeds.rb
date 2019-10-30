# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Country.destroy_all 
Country.create(:name => 'Australia', :area => 7692024, :continent => 'Australia')
Country.create(:name => 'USA', :area => 9833520, :continent => 'North America')
Country.create(:name => 'France', :area => 640679, :continent => 'Europe')


Park.destroy_all
Park.create(:name => 'Blue Mountains', :country_id => 1, :area => 11400, :numb_climbs => 6101, :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Three_Sisters_Sunset.jpg/400px-Three_Sisters_Sunset.jpg')
Park.create(:name => 'Arapiles', :country_id => 1, :area => 75, :numb_climbs => 6101, :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Mount_Arapiles_Pano.jpg/1920px-Mount_Arapiles_Pano.jpg')
Park.create(:name => 'Joshua Tree', :country_id => 2, :area => 3200, :numb_climbs => 4466, :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Joshua_Tree_-_Cyclops_%2B_Potato_Head_-_Sunrise.jpg/284px-Joshua_Tree_-_Cyclops_%2B_Potato_Head_-_Sunrise.jpg')
Park.create(:name => 'Yosemite', :country_id => 2, :area => 3029, :numb_climbs => 3017, :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/1024px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg')
Park.create(:name => 'Forest of Fontainebleau', :country_id => 3, :area => 250, :numb_climbs => 25424, :image => ' ')


Climb.destroy_all 
Climb.create(:name => 'Jaws', :park_id => 1, :height => 15, :grade => '21', :first_ascent => 'Frey Yule')
Climb.create(:name => 'The Eternity', :park_id => 1, :height => 52, :grade => '18', :first_ascent => 'J Moore')
Climb.create(:name => 'Bard', :park_id => 2, :height => 120, :grade => '12')
Climb.create(:name => 'D Minor', :park_id => 2, :height => 35, :grade => '14')
Climb.create(:name => 'Sail Away', :park_id => 3, :height => 26, :grade => '16')
Climb.create(:name => 'Walk on the Wild Side', :park_id => 3, :height => 91, :grade => '16')
Climb.create(:name => 'Royal Arches Route', :park_id => 4, :height => 430, :grade => '14')
Climb.create(:name => 'Snake Dike', :park_id => 4, :height => 550, :grade => '14')
Climb.create(:name => 'La Marie Rose', :park_id => 5, :height => 5, :grade => 'V3')
Climb.create(:name => 'Le Surplomb du Lepreux', :park_id => 5, :height => 4, :grade => 'V3')
