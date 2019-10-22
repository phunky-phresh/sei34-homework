# require 'pry' #start debugger

def show_menu
  puts "Calculator" # TODO: you could use .center here to make it look better
  puts "-=" * 40 # budget horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[sr] - Square Root"
  puts "[ex] - Exponents"
  puts "[mc] - Mortgage Calculator"
  puts "[bmi] - BMI Calculator"
  puts "[bmi] - BMI Calculator"
  puts "[trip] - Trip Calculator"
  # TOTO: Add other options here
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

# binding.pry #end debugger

# puts "You chose: #{menu_choice}"

def num1
  puts "First number: "
  result = gets.to_i
end
def num2
  puts "Second number: "
  result = gets.to_i
end
until menu_choice == "q"
  puts "you chose: #{menu_choice}"
  case menu_choice
    when "a"
      puts "Answer is #{num1() + num2()}"
      show_menu
      menu_choice = gets.chomp.downcase
    when "s"
      puts "Answer is #{num1() - num2()}"
      show_menu
      menu_choice = gets.chomp.downcase
    when "m"
      puts "Answer is #{num1() * num2()}"
      show_menu
      menu_choice = gets.chomp.downcase
    when "d"
      puts "Answer is #{num1() / num2()}"
      show_menu
      menu_choice = gets.chomp.downcase
    when "sr"
      puts "Answer is #{Math.sqrt(num1())}"
      show_menu
      menu_choice = gets.chomp.downcase
    when "ex"
      puts "Enter number: "
      num1 = gets.to_i
      puts "To the power of: "
      num2 = gets.to_i
      puts "Answer is #{num1 ** num2}"
      show_menu
      menu_choice = gets.chomp.downcase

    when "mc"
      puts "What is your Principal amount: "
      principal = gets.to_i
      puts "What is your fixed, yearly interest rate: "
      rate = gets.to_f
      puts "How many years is your mortgage plan: "
      period = gets.to_i
      puts ((rate / 100 / 12) * principal) / (1 - ((1 + (rate / 100 / 12)) ** (-period * 12)))
      show_menu
      menu_choice = gets.chomp.downcase
    when "bmi"
      puts "What is your Height in metres: "
      height = gets.to_f
      puts "What is your weight in kilograms: "
      weight = gets.to_f
      puts "Your BMI is #{(weight / height**2).round(2)}"
      show_menu
      menu_choice = gets.chomp.downcase
    when "trip"
      puts "How far are you travelling in miles: "
      distance = gets.to_f
      puts "How fast will you travel in mph: "
      speed = gets.to_f
      puts "What is the cost per gallon: "
      price = gets.to_i
      time = distance / speed
      cost = price * distance
      puts "It will take #{time} hours and cost $#{cost}."
      show_menu
      menu_choice = gets.chomp.downcase
  else
    puts "Invalid selection, stupid."
  show_menu
  menu_choice = gets.chomp.downcase
  end
end
# puts "Thanks for using crappy calc."
