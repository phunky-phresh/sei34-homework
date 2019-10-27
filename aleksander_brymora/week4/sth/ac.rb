# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

print "Whats the current temperature: "
temperature = gets.to_f
print "Is the AC functional (y - yes, n - no): "
airconditioner = gets.chomp
desiredTemp = 30

while (airconditioner != 'y' && airconditioner != 'n')
    puts "Input the correct format"
    print "Is the AC functional (y - yes, n - no): "
    airconditioner = gets.chomp
    puts airconditioner
end

if airconditioner == "y"
    acworks = true
else 
    acworks = false
end

if acworks && temperature > desiredTemp
    puts "Turn on the A/C Please"
elsif !acworks && temperature > desiredTemp
    puts "Fix the A/C now! It's hot!"
elsif !acworks && temperature < desiredTemp
    puts "Fix the A/C whenever you have the chance... It's cool..."
else 
    puts "Its fine"
end