# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Game.destroy_all

puts "Creating games"
Game.create(:title => 'Super Smash Bros', :genre =>	'Puzzle', :composer => 'Dan Golding', :initial_release => '2019-09-20', :image => 'https://upload.wikimedia.org/wikipedia/en/5/50/Super_Smash_Bros._Ultimate.jpg', :website => 'https://www.smashbros.com/en_AU/')
Game.create(:title => 'Untitled Goose Game', :genre =>	'Fighting', :composer => 'Shinya Saito, Yoshito Higuchi', :initial_release => '2018-12-07', :image => 'https://assets1.ignimgs.com/2019/04/06/untitled-goose-game---button-fin-1554508907269.jpg', :website => 'https://goose.game/')
Game.create(:title => 'League of Legends', :genre => 'MOBA', :composer => 'Christian Linke', :initial_release => '2009-10-27', :image => 'https://upload.wikimedia.org/wikipedia/en/b/b5/League_of_Legends_logo_2019.png', :website => 'https://play.oce.leagueoflegends.com/en_AU')

Company.destroy_all

puts "Creating companies"
Company.create(:name => 'Electronic Arts', :founder => 'Trip Hawkins', :founded =>'1982-05-28', :headquarter => 'Redwood City, California, United States', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Electronic-Arts-Logo.svg/1200px-Electronic-Arts-Logo.svg.png', :website =>'https://www.ea.com/en-au')
Company.create(:name => 'Blizzard Entertainment', :founder => 'Allen Adham, Michael Morhaime, Frank Pearce', :founded =>'1991-02-08', :headquarter => 'Irvine, California, United States', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Blizzard_Entertainment_Logo.svg/1200px-Blizzard_Entertainment_Logo.svg.png', :website =>'https://www.blizzard.com/en-us/')
Company.create(:name => 'Nintendo Co', :founder => 'Fusajiro Yamauchi', :founded =>'1889-09-23', :headquarter => 'Redmond, Washington, United States', :image => 'https://www.dailynintendo.nl/wp-content/uploads/2018/09/logo-nintendo.png', :website =>'https://www.nintendo.com.au/')
Company.create(:name => 'Riot Games', :founder => 'Brandon Beck, Marc Merrill', :founded =>'2006-09', :headquarter => 'West Los Angeles, California, United States', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Riot_Games_%282019%29.svg/2880px-Riot_Games_%282019%29.svg.png', :website =>'https://www.riotgames.com/en')
