# # Bonus Challenge
#
# ## Do-It-Yourself Ruby REPL
#
# Try to create your own Ruby REPL (Read Evaluate Print Loop) program.
#
# It should show a prompt, read some Ruby code from the user, `eval`uate their code, print the result and loop back to the start.
#
# ### Sample Session
#
# ```
# $ ruby repl.rb
# Welcome to Ruby REPL
# > 2 + 7
# 9
# > "some" + "string"
# "somestring"
# >

puts "Welcome to Ruby REPL"
print ">"

input = gets.chomp.to_s

until input == "quit"
  output = eval(input)
  puts output
  print ">"
  input = gets.chomp.to_s
end
