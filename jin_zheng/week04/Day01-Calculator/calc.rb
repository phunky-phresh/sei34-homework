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


require 'pry'

def get_number
    print "input your number: "
    num1 = gets.to_f
    print "input your number: "
    num2 = gets.to_f
    return [num1, num2]
end



def cal_mortgage()
    print "enter total borrowing: "
    principal = gets.to_i
    print "comparison interest rate: "
    interest_rate = gets.to_f
    print "mortgage term (months): "
    term = gets.to_i
    repayment = principal * (interest_rate/12 * ((1 + interest_rate/12) ** term)) /
        (((1 + interest_rate/12) ** term) - 1)
    puts "Your borrowing is $#{principal}. Interest rate is #{interest_rate * 100}%. Your loan term is #{term} months. Your monthly repayment is #{'%.2f'%repayment} dollars."
end



def cal_bmi()
    print "enter your height (cm): "
    height = gets.to_f
    print "enter your weight (kg): "
    weight = gets.to_f
    index = (weight / height / height) *10000
    puts "Your BMI is #{'%.2f' %index}."
end



def cal_trip()
    print "How long is the distance in miles: "
    distance = gets.to_f
    print "How many gallons per mile: "
    gallon_per_mile = gets.to_f
    print "How much is a gallon of petrol: "
    price_per_gallon = gets.to_f
    print "What is the speed in miles per hour: "
    speed = gets.to_f

    time = distance/speed
    cost = distance * gallon_per_mile * price_per_gallon

    puts "The estimated travel time is #{time} hours The cost of this trip is #{cost} dollars."
end



def show_menue
puts '-=' *40
title = "Calculator".center(80)
puts title
puts '-=' *40
puts "[a] - Addition"
puts "[s] - Subtraction"
puts "[m] - Multiple"
puts "[d] - Division"
puts "[e] - exponent"
puts "[r] - Square root"
puts "[mortgage] - Mortgage Calculator "
puts "[bmi] - BMI Calculator"
puts "[trip] - Trip Calculator"
puts "-=" *40
print "Enter your choice: "
end

show_menue
menu_choice = gets.chomp.downcase


until menu_choice == 'q'
    if menu_choice.length == 1


        nums = get_number
        puts "--" * 40
        case menu_choice

        when "a"
            puts "#{nums[0]} plus #{nums[1]} is #{nums[0]+nums[1]}."
        when "s"
            puts "#{nums[0]} minus #{nums[1]} is #{nums[0]-nums[1]}."
        when "m"
            puts "#{nums[0]} times #{nums[1]} is #{nums[0]*nums[1]}."
        when "d"
            puts "#{nums[0]} divided by #{nums[1]} is #{nums[0]/nums[1]}."
        when "e"
            puts "#{nums[1]} times itself by #{nums[0]} times is #{nums[0]**nums[1]}."
        when "r"
            puts "the #{nums[1]}(th) root of #{nums[0]} is #{'%.2f'%nums[0]**(1/nums[1])}."
        else
            "Invilid choice. Choose again: "
        end
    else
        case menu_choice

        when "mortgage"
            cal_mortgage
        when "bmi"
            cal_bmi
        when "trip"
            cal_trip
        else
            "Invilid choice. Choose again: "
        end
    end
    puts " "
    show_menue
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using amazing calculator"
