# CREATE TABLE oceans (
#   id INTEGER PRIMARY KEY AUTOINCREMENT,
#   name TEXT,
#   area INTEGER,
#   depth INTEGER,
#   max_salinity INTEGER, --parts per thousand
#   image TEXT
# );
Ocean.destroy_all

Ocean.create :name=> 'Pacific', :area=> 165250000, :depth=> 10911, :max_salinity=> 37, :image=> 'https://cdn.britannica.com/14/3314-050-52C82811/depth-contours-Pacific-Ocean-submarine-features.jpg'
Ocean.create :name=> 'Atlantic', :area=> 106460000, :depth=> 8376, :max_salinity=> 37, :image=> 'https://cdn.britannica.com/04/6004-050-0816A49C/depth-contours-Atlantic-Ocean-submarine-features.jpg'

puts "#{Ocean.count} oceans"
