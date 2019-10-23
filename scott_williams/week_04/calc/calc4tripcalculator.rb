# Calculator

# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)
#
#
#
# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

require 'pry'

puts "Trip Calculator"

puts "How far do you want to go (distance in kms): "
distance = gets.to_f

puts "How many litres of petrol does your car consume per 100 km driven: "
litres = gets.to_f

puts "How much do you pay in dollars per litre for petrol: "
cost = gets.to_f

puts "How fast do you intend to drive in km/hr: "
speed = gets.to_f


# calculators
def trip_time(distance, speed)
  distance / speed
end

def trip_cost(distance, litres, cost)
  distance * litres * cost / 100
end

puts "Your calculated trip time is: #{ trip_time(distance, speed).round(2) } hours."
puts "The estimate cost in petrol for your time is: $#{ trip_cost(distance, litres, cost).round(2) }."

# binding.pry # like the JS debugger
