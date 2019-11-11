# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Volcano.destroy_all

Volcano.create :name => "Novarupta", :continent => 'North America', :category => 'Active', :image =>'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F796775%252F11abdde6-b1b8-414f-8a4d-c374c3c9b4ac.jpg%252Ffull-fit-in__950x534.jpg?signature=r-FzETDQzNIF476b4xUxuYbG1yY=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com'
Volcano.create :name => "Parícutin", :continent => 'South America', :category => "Active", :image => 'https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F796941%252F2c0cacdb-9774-4281-ad9b-2b9db9056a0e.jpg%252Ffull-fit-in__950x534.jpg?signature=weTgTrKav0sTJglRMc3NRBHGQVg=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com'
Volcano.create :name => "Mount Fuji", :continent => 'Asia', :category =>'Dormant', :image =>'https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/08/Mount-Fuji.jpg'
Volcano.create :name => "Mount Elgon", :continent => 'Africa', :category =>'Extinct', :image =>'http://www.ugandatravelguide.com/wp-content/uploads/2014/08/Mountain-Elgon-National-Park-Uganda.jpg'
