print "Choose the max number: "
max = gets.to_i
number_to_guess = rand 0..max
print "Have a guess: "
guess = gets.to_i
until (guess == number_to_guess)
    if number_to_guess > guess
        puts "Higher!"
    else
        puts "Lower!"
    end
    guess = gets.to_i
end
puts "Congratulations! It was #{number_to_guess}"