Movie.destroy_all

puts "Creating movies"
Movie.create(:title => 'The Hateful Eight', :genre => 'Crime', :year => 2015, :image => 'https://m.media-amazon.com/images/M/MV5BMTc1MjMxNzMyNF5BMl5BanBnXkFtZTgwNTM0MTA2NjE@._V1_SY1000_SX675_AL_.jpg', :director_id => 1)
Movie.create(:title => 'Inglourious Basterds', :genre => 'Adventure', :year => 2009, :image => 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX675_AL_.jpg', :director_id => 1)
Movie.create(:title => 'Hulk', :genre => 'Sci-Fi', :year => 2003, :image => 'https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_.jpg', :director_id => 5)
Movie.create(:title => 'The Wolf of Wall Street', :genre => 'Drama', :year => 2013, :image => 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg', :director_id => 3)
Movie.create(:title => 'The Great Gatsby', :genre => 'Romance', :year => 2013, :image => 'https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SY1000_SX666_AL_.jpg', :director_id => 2)
Movie.create(:title => 'Life of Pi', :genre => 'Adventure', :year => 2012, :image => 'https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg', :director_id => 5)
Movie.create(:title => 'Thor: Ragnarok', :genre => 'Action', :year => 2017, :image => 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg', :director_id => 4)
Movie.create(:title => 'The Prestige', :genre => 'Sci-Fi', :year => 2006, :image => 'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg', :director_id => 6)
Movie.create(:title => 'Romeo + Juliet', :genre => 'Romance', :year => 1996, :image => 'https://m.media-amazon.com/images/M/MV5BMGU4YmI1ZGQtZjExYi00M2E0LTgyYTAtNzQ5ZmVlMTk4NzUzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg', :director_id => 2)
Movie.create(:title => 'Interstellar', :genre => 'Sci-Fi', :year => 2014, :image => 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg', :director_id => 6)
Movie.create(:title => 'The Aviator', :genre => 'Biography', :year => 2004, :image => 'https://m.media-amazon.com/images/M/MV5BZTYzMjA2M2EtYmY1OC00ZWMxLThlY2YtZGI3MTQzOWM4YjE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg', :director_id => 3)
Movie.create(:title => 'Jojo Rabbit', :genre => 'Comedy', :year => 2019, :image => '', :director_id => 4)
Movie.create(:title => 'Inception', :genre => 'Sci-Fi', :year => 2010, :image => 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg', :director_id => 6)
Movie.create(:title => 'Casino', :genre => 'Crime', :year => 1995, :image => 'https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg', :director_id => 3)
Movie.create(:title => 'The Dark Knight', :genre => 'Action', :year => 2008, :image => 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg', :director_id => 6)


Director.destroy_all

puts "Creating directors"
Director.create(:name => 'Quentin Tarantino', :dob => '1963-03-27', :nationality => 'American', :image => 'https://m.media-amazon.com/images/M/MV5BMTgyMjI3ODA3Nl5BMl5BanBnXkFtZTcwNzY2MDYxOQ@@._V1_.jpg')
Director.create(:name => 'Baz Luhrmann', :dob => '1962-09-17', :nationality => 'Australian', :image => 'https://upload.wikimedia.org/wikipedia/commons/5/56/Baz_Luhrmann.jpg')
Director.create(:name => 'Martin Scorsese', :dob => '1942-11-17', :nationality => 'American', :image => 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.CyY5c3vCxk/v1/1000x-1.jpg')
Director.create(:name => 'Taika Waititi', :dob => '1975-08-16', :nationality => 'New Zealand', :image => 'https://superstarsbio.com/wp-content/uploads/2019/09/taika-waititi-age.jpeg')
Director.create(:name => 'Ang Lee', :dob => '1954-10-23', :nationality => 'Taiwanese', :image => 'https://s.yimg.com/uu/api/res/1.2/dLcX2kMHTc6uzWAD2n2ygw--~B/aD0yNjkyO3c9MzkwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/http://globalfinance.zenfs.com/images/US_AHTTP_AP_FINANCIALTIMES/df7a83fc9a975920210f6a7067009eec_original.jpg')
Director.create(:name => 'Christopher Nolan', :dob => '1970-07-30', :nationality => 'English', :image => 'https://media.vanityfair.com/photos/5ce594f01f3a6fc952c01787/16:9/w_2560%2Cc_limit/christopher-nolan-new-movie-tenet-cast-details.jpg')
