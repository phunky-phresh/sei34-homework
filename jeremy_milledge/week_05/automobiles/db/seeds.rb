Car.destroy_all
puts "adding seed cars"

Car.create(:model=> "Megane RS265 Cup", :year=> "2015", :style=> "coupe", :engine_capacity=> 1998, :cylinders=> 4, :image=> "https://hothatch.com.au/wp-content/uploads/2018/04/Renault-Megane-III-facelift-RS-1.jpg")
Car.create(:model=> "Golf GTI", :year=> "2019", :style=> "hatchback", :engine_capacity=> 2000, :cylinders=> 4, :image=> "https://www.volkswagen.com.au/content/dam/vw-ngw/vw_pkw/importers/au/showrooms/golfr/16x9/golf-gti-red-my19.5.png/jcr:content/renditions/original.transform/med/img.png")
Car.create(:model=> "i30N", :year=> "2018", :style=> "hatchback", :engine_capacity=> 1998, :cylinders=> 4, :image=> "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/all-new_hyundai_i30_n_3.jpg")

Manufacturer.destroy_all
puts "adding seed manufacturers"

Manufacturer.create(:name=> "Renault", :parent=> "RNMA", :origin=> "France", :founded=> "1899")
Manufacturer.create(:name=> "Volkswagen", :parent=> "VAG", :origin=> "Germany", :founded=> "1937")
Manufacturer.create(:name=> "Hyundai", :parent=> "HMG", :origin=> "South Korea", :founded=> "1967")
