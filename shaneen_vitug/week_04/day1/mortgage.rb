# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
puts "----------This is a Mortgage Calculator----------"
print "Enter the loan amount: "
loan = gets.to_i
print "Enter the interest rate: "
rate = ((gets.to_f) / 100) / 12
print "How long in months are you paying: "
time = gets.to_i

discount_factor = (((1 + rate) ** time) - 1) / (rate * (1 + rate) ** time)

print "The monthly payment is: $#{loan / discount_factor}.\n"

# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
puts "----------This is a BMI Calculator----------"
print "Enter your weight in kilograms: "
weight = gets.to_f
print "Enter your height in centimeters: "
height = gets.to_f / 100

bmi = (weight / (height ** 2))
print "Your BMI is #{bmi}\n"

case bmi
when 0..18.49
  puts "You are underweight"
when 18.5..24.9
  puts "You are healthy"
when 25..29.9
  puts "You are overweight"
when 30..40
  puts "You are obese"
else
  puts "Invalid input"
end

# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

puts "----------This is a Trip Calculator----------"
print "Enter the distance in km: "
distance = gets.to_i
print "Enter the average drive speed (km/h): "
speed = gets.to_i
print "Enter how much per liter the car takes per 100 km: "
fuel_comsumption = gets.to_f
print "Enter the price per liter: "
price = gets.to_f

puts "The trip time is about #{(distance / speed).to_i} hours."
puts "The total drive cost is $#{distance.to_f / 100 * fuel_comsumption * price}."
