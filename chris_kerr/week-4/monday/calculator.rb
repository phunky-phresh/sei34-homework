def show_menu
    puts "Calulator"
    puts "-=" * 20  #easy horizontal line
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] - multiplication"
    puts "[d] - division"
    puts "[q] - exit calculator"
    print "Please enter your choice: "

end

show_menu
menu_choice = gets.chomp.downcase 


until menu_choice == "q"
    puts "-=" * 20
    print "What is the first number? "
    num1 = gets.to_f
    print "What is the second number? "
    num2 = gets.to_f

    case menu_choice
    when "a"
        puts "The addition of #{num1} and #{num2} is #{num1 + num2}"
        puts "-=" * 20

    when "s"
        puts "The Subraction of #{num1} from #{num2} is #{num2 - num1}"
        puts "-=" * 20
    when "d"
        puts "The Division of #{num1} by #{num2} is #{(num1/num2).to_f}"
        puts "-=" * 20
    when "m"
        puts "The Multiplication of #{num1} and #{num2} is #{num2 * num1}"
        puts "-=" * 20
    else
        puts "Unknown choice"
        puts "-=" * 20
    end
    show_menu
    menu_choice = gets.chomp.downcase 
end

puts "Thank you for using the Calculator"


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

# BMI Calculator

# Calculate the body mass index (BMI) for an individual, given their height and weight

# Trip Calculator

# Calculate a trip time and cost given inputs for

# distance
# miles per gallon
# price per gallon
# speed in miles per hour