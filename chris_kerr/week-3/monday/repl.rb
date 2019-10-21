# Bonus Challenge

# Do-It-Yourself Ruby REPL

# Try to create your own Ruby REPL (Read Evaluate Print Loop) program.

# It should show a prompt, read some Ruby code from the user, evaluate their code, print the result and loop back to the start.

# Sample Session

# $ ruby repl.rb
# Welcome to Ruby REPL
# > 2 + 7
# 9
# > "some" + "string"
# "somestring"
# >

def run_ruby (input_string)

end

puts "Welcome to Chris' Ruby REPL"
puts "Type 'quit' to finish session"
print "> "
user_input = gets.chomp

until user_input == 'quit'
    `touch .tmp.rb`
    `echo output = #{user_input} >> .tmp.rb`
    `echo puts output >> .tmp.rb`
    print `ruby .tmp.rb`
    `rm .tmp.rb`    
    print "> "
    user_input = gets.chomp
end

puts "Thank you for using my REPL"