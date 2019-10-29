Glacier.destroy_all

# Glacier.new :name => 'Fedchenko Glacier', :image => 'https://www.wondersify.com/wp-content/uploads/2017/05/largest-glaciers-1.jpg', :country => 'Tajikistan', :length => 77000

# Glacier.create (:name => 'Siachen Glacier', :image => 'https://www.wondersify.com/wp-content/uploads/2017/05/largest-glaciers-2.jpg', :country => 'India / Pakistan', :length => 76000)

new_glacier_1 = Glacier.new 
new_glacier_1.name = 'Fedchenko Glacier'
new_glacier_1.image = 'https://www.wondersify.com/wp-content/uploads/2017/05/largest-glaciers-1.jpg'
new_glacier_1.country = 'Tajikistan'
new_glacier_1.length = 77000
new_glacier_1.save
new_glacier_2 = Glacier.new 
new_glacier_2.name = 'Siachen Glacier'
new_glacier_2.image = 'https://www.wondersify.com/wp-content/uploads/2017/05/largest-glaciers-2.jpg'
new_glacier_2.country = 'India / Pakistan'
new_glacier_2.length = 76000
new_glacier_2.save


# id INTEGER PRIMARY KEY AUTOINCREMENT,
# name TEXT,
# image TEXT,
# length INTEGER,
# country TEXT,
# volume INTEGER