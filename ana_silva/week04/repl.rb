# Do-It-Yourself Ruby REPL
# Try to create your own Ruby REPL (Read Evaluate Print Loop) program.
#
# It should show a prompt, read some Ruby code from the user, evaluate their code, print the result and loop back to the start.
#
# Sample Session
# $ ruby repl.rb
# Welcome to Ruby REPL
# > 2 + 7
# 9
# > "some" + "string"
# "somestring"
# >


puts "Welcome to Ruby REPL"

print "> "
input = gets.chomp

until input == "exit"

  begin
    # puts "\"#{eval(input)}\"" if input.class == String
    puts eval(input)
  rescue
    puts "Invalid input"
  end
    print "> "
    input = gets.chomp

end

puts "Exiting Ruby REPL"
