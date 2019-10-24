puts "Welcome to the SW REPL for Ruby"
prompt = ">SW REPL> "
print prompt
while (input = gets.chomp)
  break if input == "exit"

  system(input)
  print prompt
end
