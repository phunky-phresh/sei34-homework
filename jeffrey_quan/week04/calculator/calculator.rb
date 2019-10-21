# Week 4, Day 1 - Monday, 21 October 2019
# Day 15

# # Calculator
#
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

def show_menu
  puts "Calculator" # TODO: you could use .center here to make it look nicer.
  puts "-=" * 40 # Budget horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[sq] - Square Roots"
  puts "[p] - Power"
  puts "[q] - Quit"
  print "Enter your choice: "
end

def calculate(type)
  print "First number: "
  first_num = gets.to_f
  if (type != "square root") && (type != "power")
    print "Second number: "
    second_num = gets.to_f
  end
  if type == "power"
    print "Power: "
    power = gets.to_i
  end
  case type
  when "addition"
    return first_num + second_num
  when "subtraction"
    return first_num - second-num
  when "multiplication"
    return first_num * second_num
  when "division"
    return first_num / second_num
  when "square root"
    return Math.sqrt(first_num)
  when "power"
    return first_num ** power
  end
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "#{ calculate("addition") }"
  when 's'
    puts "#{ calculate("subtraction") }"
  when 'm'
    puts "#{ calculate("multiplication") }"
  when 'd'
    puts "#{ calculate("division") }"
  when 'sq'
    puts "#{ calculate("square root") }"
  when 'p'
    puts "#{ calculate("power") }"
  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator!"

# binding.pry # like the JS debugger
