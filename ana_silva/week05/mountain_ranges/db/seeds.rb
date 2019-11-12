# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Mountain.destroy_all

Mountain.create :name => "Himalayas", :continent => "Asia", :length => 2400
Mountain.create :name => "Andes", :continent => 'South America', :length => 7000
Mountain.create :name => "Rocky Mountains", :continent => 'North America', :length => 3000

p "There are #{Mountain.count} mountain ranges."
