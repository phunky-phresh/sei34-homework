puts "Welcome to JezREPL"

def get_input()
  print "> "
  gets.chomp
end

input = get_input

until input == 'q'
  res = eval(input)
  puts "> #{res}"
  input = get_input
end

puts "quitting."
