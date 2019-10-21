# Title: Guess The Number

# Activity:

# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:

# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:

# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

puts "Lets play a guessing game"
puts "I'll pick a number between 0 and whatever you choose, then you guess it"
print "So whats the top number? "

maxGuess = gets.to_i
computer_guess = rand 0..maxGuess

print "What number am I thinking of? "

hu_guess = gets.to_i

until hu_guess == computer_guess
    if hu_guess < computer_guess
        print "#{hu_guess} is too low, try higher.. guess again? "
    else
        print "#{hu_guess} is too high, try lower.. guess again? "
    end  
    hu_guess = gets.to_i
end

puts "#{hu_guess} is correct! Great guessing!"