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


Park.destroy_all
Park.create(:name => 'Blue Mountains', :country_id => 1, :area => 11400, :numb_climbs => 6101, :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Three_Sisters_Sunset.jpg/400px-Three_Sisters_Sunset.jpg')
Park.create(:name => 'Joshua Tree', :country_id => 2, :area => 3200, :numb_climbs => 4466, :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Joshua_Tree_-_Cyclops_%2B_Potato_Head_-_Sunrise.jpg/284px-Joshua_Tree_-_Cyclops_%2B_Potato_Head_-_Sunrise.jpg')


Climb.destroy_all 
Climb.create(:name => 'Jaws', :park_id => 1, :height => 15, :grade => 21, :first_ascent => 'Frey Yule')
Climb.create(:name => 'Sail Away', :park_id => 2, :height => 26, :grade => 16)