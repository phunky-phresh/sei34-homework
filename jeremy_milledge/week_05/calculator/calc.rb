require 'pry'
require 'rainbow'

# calc functions
def add(a, b)
  a + b
end

def subtract(a, b)
  a - b
end

def multiply(a,b)
  a * b
end

def divide(a, b)
  a / b
end

def mod(a, b)
  a % b
end

def exp(a,n)
  a ** n
end

def nth_root(a, n)
  a ** (1/n.to_f)
end

def mortgage(p, i, d) #principal, interest rate, duration
  r = i / 12 / 100
  n = d * 12
  numer = r * p
  denom = 1 - (1 + r) ** -n
  numer/denom
end

# ui functions
def get_two_nums(a="first number", b="second number")
  print "Enter #{a}: "
  first = gets.to_f
  puts "First number: #{first}."
  print "Enter #{b}: "
  second = gets.to_f
  puts "Second number: #{second}."
  return first, second
end

def get_three_nums(a="first number", b="second number", c="third number")
  first, second = get_two_nums(a, b)
  print "Enter #{c}: "
  third = gets.to_f
  puts "Third number: #{third}"
  return first, second, third
end

def divider()
  puts "=" * 80
end

def red_head(str)
  divider
  puts Rainbow(str.upcase).red.center(84)
  divider
end

def yellow_special(str)
  puts Rainbow(str).yellow
end

def blue_ans(str)
  divider
  puts Rainbow(str).blue.center(84)
  divider
end

def show_menu()
  red_head "calculator"
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[r] - Modulus/Remainder"
  puts "[e] - Exponent"
  puts "[n] - Nth Root"
  yellow_special "[g] - Mortgage Repayments"
  yellow_special "[b] - Body Mass Index"
  yellow_special "[t] - Trip Time and Cost"
  puts "[q] - Quit"

  print "Enter your choice: "
end



# interface display
show_menu
choice = gets[0].downcase

# binding.pry

until choice == 'q'
  case choice
  when 'a'
    red_head "addition mode"
    first, second = get_two_nums
    ans = add(first, second)
    blue_ans "#{first} + #{second} = #{ans}"
  when 's'
    red_head  "subtraction mode"
    first, second = get_two_nums
    ans = subtract(first, second)
    blue_ans "#{first} - #{second} = #{ans}"
  when 'm'
    red_head "multiplication mode"
    first, second = get_two_nums
    ans = multiply(first, second)
    blue_ans "#{first} x #{second} = #{ans}"
  when 'd'
    red_head "division mode"
    first, second = get_two_nums('numerator', 'denominator')
    ans = divide(first, second)
    blue_ans "#{first} / #{second} = #{ans}"
  when 'r'
    red_head "modulus mode"
    first, second = get_two_nums('numerator', 'denominator')
    ans = mod(first, second)
    blue_ans "Remainder of #{first} / #{second} = #{ans}"
  when 'e'
    red_head "exponent mode"
    first, second = get_two_nums('base', 'exponent')
    ans = exp(first, second)
    blue_ans "#{first} to the power of #{second} = #{ans}"
  when 'n'
    red_head "nth root mode"
    first, second = get_two_nums('base', 'degree of root')
    ans = nth_root(first, second)
    puts ans
    blue_ans "#{second} root of #{first} = #{ans}"
  when 'g'
    red_head "mortgage repayment mode"
    p, i, d = get_three_nums('principal', 'interest rate', 'duration (years)')
    ans = mortgage(p,i,d)
    puts ans
    blue_ans "Monthly repayments for principal of $#{p}, interest rate of #{i}%, and duration #{d} years = $#{ans}"
  when 'b'
    red_head "body mass index mode"
    first, second = get_two_nums('base', 'degree of root')
    ans = nth_root(first, second)
    puts ans
    blue_ans "#{second} root of #{first} = #{ans}"
  when 't'
    red_head "trip time and cost mode"
    first, second = get_two_nums('base', 'degree of root')
    ans = nth_root(first, second)
    puts ans
    blue_ans "#{second} root of #{first} = #{ans}"
  else
    red_head "Invalid choice"
  end
  show_menu
  choice = gets[0].downcase
end

puts "Thanks for using jezCalc"
