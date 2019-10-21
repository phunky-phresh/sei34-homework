def raindrops number
  output = ''

  # if number % 3 == 0
  #   output += 'Pling'
  # end

  output += 'Pling' if number % 3 == 0
  output += 'Plang' if number % 5 == 0
  output += 'Plong' if number % 7 == 0

  # if output.empty?
  #   return number
  # end
  return number if output.empty?



  output
end

puts "input 28: #{raindrops(28)}"
puts "input 1755: #{raindrops(1755)}"
puts "input 105: #{raindrops(105)}"
puts "input 34: #{raindrops(34)}"
