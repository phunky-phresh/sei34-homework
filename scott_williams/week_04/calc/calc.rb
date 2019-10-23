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

def show_menu
  heading =  "Calculator" #TODO: you could use .center here to make it look nicer
  puts heading.center(80)
  puts "-=" * 40 # Budget horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[r] - Square Root"
  puts "[e] - Exponent"
  puts "[q] - Quit"
  #TODO: Add other options here
  print "Enter your choice of operator: "
end

show_menu
menu_choice = gets.chomp.downcase

# puts "Menu choice is: #{ menu_choice }"

# calculators
def addition(a, b)
  a + b
end

def subtraction(a, b)
  a - b
end

def multiplication(a, b)
  a * b
end

def division(a, b)
  a / b
end

def exponent(a, b)
  a ** b
end

def sqroot(a)
  Math.sqrt(a)
end

puts "You chose: #{ menu_choice }"

until menu_choice == 'q'
  print "Enter your first number: "
  first_num = gets.to_f

  if menu_choice != "r"
    print "Enter your second number: "
    second_num = gets.to_f
  end

  case menu_choice
  when 'a'
    puts "The addition of #{ first_num } and #{ second_num } is #{ addition(first_num, second_num) }"
    puts ""
  when 's'
    puts "The subtraction of #{ first_num } less #{ second_num } is #{ subtraction(first_num, second_num) }"
    puts ""
  when 'm'
    puts "The multiplication of #{ first_num } and #{ second_num } is #{ multiplication(first_num, second_num) }"
    puts ""
  when 'd'
    puts "The division of #{ first_num } divided by #{ second_num } is #{ division(first_num, second_num) }"
    puts ""
  when 'r'
    puts "The square root of #{ first_num } is #{ sqroot(first_num) }"
    puts ""
  when 'e'
    puts "The exponent of #{ first_num } to the power of #{ second_num } is #{ exponent(first_num, second_num) }"
    puts ""
  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

# puts "Your first number was #{ calltwo[0] }."
# puts "Your second number was #{ calltwo[1] }."

puts "Thanks for using crappy calculator."
puts "-=" * 40 # Budget horizontal dividing line

# binding.pry # like the JS debugger
