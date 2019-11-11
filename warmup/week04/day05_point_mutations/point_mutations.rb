
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





# Another solution - Chris
# This solution prints out the location of differences between the strands

# puts "Please enter two strings to calculated Hamming distance "
# print "> "
# string_one = gets.chomp.upcase.split('')
# print "> "
# string_two = gets.chomp.upcase.split('')
# diff_index = [' ', ' ']
# ​
# if string_one.size > string_two.size
#     #loop over string_one
#     string_one.each_with_index do | char, i |
#         if char == string_two[i]
#             diff_index << ' '
#         else
#             diff_index << '^'
#         end
#     end
# else
#     #loop over string_two
#     string_two.each_with_index do | char, i |
#         if char == string_one[i]
#             diff_index << ' '
#         else
#             diff_index << '^'
#         end
#     end
# end
# ​
# puts diff_index.join('')
# hamming_num = diff_index.select {|i| i == '^'}
# puts "The Hamming distance between these two DNA strands is #{hamming_num.size}.
