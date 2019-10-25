
# Write a program that can calculate the Hamming difference between two DNA strands.

# ```
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# ```
#
# Source

def hamming_distance(strand_one, strand_two)
  difference = 0

  strand_one.chars.each_with_index do |letter, index|
    # puts "#{letter}: #{index}"
    if letter != strand_two[index]
      puts "#{letter} != #{strand_two[index]}"
      difference += 1
    end

  end


  difference
end

puts hamming_distance("GAGCCTACTAACGGGAT","CATCGTAATGACGGCCT")
