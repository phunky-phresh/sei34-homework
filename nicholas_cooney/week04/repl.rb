puts "ruby repl attemp"

def handle_input(input)
  result = eval(input)
  puts (" => #{result}")
end

repl = -> prompt do
  print prompt
  handle_input(gets.chomp)
end

loop do
  repl[">> "]
end
