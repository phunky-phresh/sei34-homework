# Calculator
# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour



require "rainbow"
require "pry"


def show_menu
  puts ""
  puts "Calculator" #TODO: you could use .center here to make it look nicer
  puts "-=" * 40 #Budget horizontal dividing line
  puts "[a] -  Addition"
  puts "[s] - Substraction"
  puts "[t] - Times"
  puts "[d] - Division"
  puts "[sq] - SquareRoot"
  puts "[e] - Exponential"
  puts "[%] - Modulus"
  puts "[m] - Mortgage payments"
  puts "[bmi] - Body Mass Index"
  puts "[trip] - Trip costs"
  puts "[q] - Quit"
  #TODO: add other options here
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase


#define calculations
def addition(a, b)
  a + b
end

def substraction(a, b)
  (a - b)
end

def times(a, b)
  (a * b)
end

def division(a, b)
  (a / b)
end

def power(a, b)
  (a ** b)
end

def mortgage(principal, rate, period)
  n = period * 12
  interest = rate/100/12
  principal * (interest * power(1 + interest, n)) / (power(1 + interest, n) - 1)
end

def bmi(height, weight)
  (weight / power(height, 2)).round(1)
end

def trip(distance, consumption, fuel_cost)
  distance/100 * consumption * fuel_cost
end


if menu_choice == 'm'
  print "How much do you want to borrow ($): "
  principal = gets.to_i
  print "What is your interest rate (%): "
  rate = gets.to_f
  print "Number of years to pay: "
  period = gets.to_f
elsif menu_choice == 'bmi'
  print "Height: "
  height = gets.to_f
  print "Weight: "
  weight = gets.to_f
elsif menu_choice == "trip"
  print "Travelling distance (km): "
  distance = gets.to_f
  print "What is the car consumption (litres per 100 km): "
  consumption = gets.to_f
  print "What is the cost of fuel ($ per litre): "
  fuel_cost = gets.to_f
else
  print "First value: "
  a = gets.to_f
  if menu_choice != 'sq'
    print "Second value: "
    b = gets.to_f
  end
end
puts ""


#define output
until menu_choice == 'q'

  puts case menu_choice
  when 'a'
    "Result: #{addition a, b}"
  when 's'
    "Result: #{substraction a, b}"
  when 't'
    "Result: #{times a, b}"
  when 'd'
    "Result: #{division a, b}"
  when 'sq'
    "Result: #{Math.sqrt(a)}"
  when 'e'
    "Result: #{power a, b}"
  when '%'
    "Remainder is #{a % b}"
  when 'bmi'
    "BMI = #{bmi(height, weight)}"
  when 'm'
    "Your monthly mortgage is $#{mortgage(principal, rate, period).to_i}."
  when 'trip'
    "Your trip cost will be $#{trip(distance, consumption, fuel_cost).to_i}."
  else
    "Invalid selection."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator."


# binding.pry   #like the JS debugger
