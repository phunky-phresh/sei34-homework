require "pry"

def show_menu
  puts "Calculator".center(80) 
  puts "-=" * 40 # Budget horizontal dividing line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase


until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "Enter first num: "
    num1 = gets.chomp
    puts "enter second num: "
    num2 = gets.chomp
    puts num1.to_f + num2.to_f

  when 's'
    puts "Enter first num: "
    num1 = gets.chomp
    puts "Enter second num: "
    num2 = gets.chomp
    puts num1.to_f - num2.to_f

  when 'm'
    puts "Enter first num: "
    num1 = gets.chomp
    puts "Enter second num: "
    num2 = gets.chomp
    puts num1.to_f * num2.to_f

  when 'd'
    puts "Enter first num: "
    num1 = gets.chomp
    puts "Enter second num: "
    num2 = gets.chomp
    puts num1.to_f / num2.to_f

  else
    puts "Invalid selection. Idiot."

  end

  show_menu
  menu_choice = gets.chomp.downcase
end
#
puts "Thanks for using crappy calculator"



binding.pry #likethe JS debugger
