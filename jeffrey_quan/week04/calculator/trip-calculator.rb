# Week 4, Day 1 - Monday, 21 October 2019
# Day 15

# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

print "Distance (in miles): "
distance = gets.to_f
print "Average speed (miles per hour): "
speed = gets.to_f
print "Miles per gallon: "
miles_per_gallon = gets.to_f
print "Price per gallon: "
price_per_gallon = gets.to_f

trip_time = distance/speed
cost = distance/miles_per_gallon * price_per_gallon

puts "The total trip will take: #{ '%.1f' % trip_time } hours and the total cost of petrol will be $#{ '%.2f' % cost }."
