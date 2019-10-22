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

loop do
print "> "
code = gets()
puts eval(code)
end
