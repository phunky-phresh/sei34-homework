# require 'pry'

def show_menu
  puts "Calculator".center(80)
  puts "-=" * 40 # Budget horizontal dividing line
  puts "[a] - Addition".center(80)
  puts "[s] - Subtraction".center(83)
  puts "[m] - Multiplication".center(86)
  puts "[d] - Division".center(80)
  puts "[e] - Exponents".center(82)
  puts "[r] - Square roots".center(84)
  puts "[q] - Quit".center(76)
  print "Enter your choice: ".upcase
end

show_menu
menu_choice = gets.chomp.downcase

# binding.pry # like the JS debugger

until menu_choice == 'q'
  print "Enter the first number: "
  first_num = gets.to_i
if menu_choice != 'r'
  print "Enter the second number: "
  second_num = gets.to_i
end
  case menu_choice
  when 'a'
    print "Addition: #{first_num} + #{second_num} = #{first_num + second_num}\n"
  when 's'
    print "Subtraction #{first_num} - #{second_num} = #{first_num - second_num}\n"
  when 'm'
    print "Multiplication #{first_num} * #{second_num} = #{first_num * second_num}\n"
  when 'd'
    print "Division #{first_num} / #{second_num} = #{first_num / second_num}\n"
  when 'e'
    print "Exponentiation #{first_num} ^ #{second_num} = #{first_num ** second_num}\n"
  when 'r'
    print "Square root of #{first_num} = #{Math.sqrt(first_num)}\n"
  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator"
