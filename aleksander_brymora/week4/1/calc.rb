def show_menu
    puts "-=" * 40
    puts "Calculator" #.center look up
    puts "-=" * 40
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[r] - Square Root"
    puts "[p] - Power"
    puts "[q] - Quit"
    print "Enter your choice: "
end

# *Calculation methods
def addition a, b
    a + b
end

def subtraction a, b
    a - b
end

def multiplication a, b
    a * b
end

def division a, b
    a / b
end

def square_root a
    Math.sqrt(a)
end

def power a, b
    a ** b
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
    case menu_choice
    when 'a'
        puts "---=Addition=---"
        print "Input first number: "
        a = gets.to_f
        print "Input second number: "
        b = gets.to_f
        puts "#{a} + #{b} = #{addition a, b}"
    when 's'
        puts "---=Subtraction=---"
        print "Input first number: "
        a = gets.to_f
        print "Input second number: "
        b = gets.to_f
        puts "#{a} - #{b} = #{subtraction a, b}"
    when 'm'
        puts "---=Multiplication=---"
        print "Input first number: "
        a = gets.to_f
        print "Input second number: "
        b = gets.to_f
        puts "#{a} * #{b} = #{multiplication a, b}"
    when 'd'
        puts "---=Division=---"
        print "Input first number: "
        a = gets.to_f
        print "Input second number: "
        b = gets.to_f
        puts "#{a} / #{b} = #{division a, b}"
    when 'r'
        puts "---=Square root=---"
        print "Input a number: "
        a = gets.to_f
        puts "Square root of #{a} = #{square_root a}"
    when 'p'
        puts "---=Power=---"
        print "Input a number: "
        a = gets.to_f
        print "Input an exponent: "
        b = gets.to_i
        puts "#{a}^#{b} = #{power a, b}"
    else
        puts "Invalid Selection"
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using my crappy calc"