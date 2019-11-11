# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Animation.destroy_all

puts "Creating animations"

Animation.create(:title => 'Shrek', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKg3WqGfUr9DogzJDrnREDHHvsry9dyIptDuJ33Y3JhjmagebS', :year => '2001', :actors => 'Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow', :box_office => 484.4)
Animation.create(:title => 'Madagascar', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIMm8srM2CYCv_OsumWt2pvFjtmc-Q5ACQIN_6Js0qnCXAX7ga', :year => '2005', :actors => 'Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith', :box_office => 532.7)
Animation.create(:title => 'Toy Story', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvBlpDFtXQfRJQNiE9M_4PTfJzTFj8Rr2lkwbuuIUcNJlFqcsQ', :year => '1995', :actors => 'Tom Hanks, Tim Allen, Don Rickles', :box_office => 373.6)
Animation.create(:title => 'Finding Nemo', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9f_l4Oj5-_LH3wpXy7JpHgo04LTMYWMbdW4eg5nu5JMAXGdPo', :year => '2003', :actors => 'Albert Brooks, Ellen DeGeneres, Alexander Gould, Willem Dafoe', :box_office => 940.3)

puts "There are #{Animation.count} animations."




Producer.destroy_all

puts "Creating producers"

Producer.create(:name => 'Pixar', :logo => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyP5Pbj428jsJ6ZUw4j3ZQsSWbO6hQtQWm7jLEueC_oKl1YqTN', :foundation_year => '1979')
Producer.create(:name => 'Warner Bros', :logo => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8YChF7YO9jQjIMB_bCcRcOyGSn9sqO3tgo1iHI_mQmi6Td5e8', :foundation_year => '1923')
