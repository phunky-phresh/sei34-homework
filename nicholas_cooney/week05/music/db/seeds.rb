# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Artist.destroy_all

puts "Creating artists"
Artist.create(:name => 'King Gizzard & the Lizard Wizard', :nationality => 'Australian', :genre => 'Psych-Rock', :image => 'https://www.beat.com.au/wp-content/uploads/2019/06/d4ab63d7-9ce4-4191-8c7b-f6b31e01b540-e1566540234469.jpg')
Artist.create(:name => 'A Tribe Called Quest', :nationality => 'USA', :genre => 'Hip-Hop', :image => 'https://atribecalledquest.com/wp-content/uploads/2015/01/atcq_fbook.jpg')


Album.destroy_all

puts "Creating Albums"
Album.create(:title => 'Nonagon Infinity', :release => '2014', :image => 'https://images-na.ssl-images-amazon.com/images/I/81OzrxuWtGL._SY355_.jpg')
