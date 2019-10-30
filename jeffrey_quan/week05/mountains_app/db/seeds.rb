Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :height => 8848, :range => 'Mahalangur Himal, Himalayas', :continent => 'Asia', :image => 'https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg', :countries => 'Nepal, China', :year_first_ascent => 1953, :climber_first_ascent => 'Edmund Hillary, Tenzing Norgay'

Mountain.create :name => 'Mount Kosciuszko', :height => 2228, :range => 'Main Range, Great Dividing Range', :continent => 'Australia', :image => 'https://cdn.britannica.com/09/137109-050-077DD0A2/slopes-Mount-Kosciuszko-Australia-New-South-Wales.jpg', :countries => 'Australia', :year_first_ascent => 1840, :climber_first_ascent => 'Pawel Edmund Strzelecki'

puts "#{ Mountain.count } mountains available."
