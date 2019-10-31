# # Luhn Formula
#
# Write a program that can take a number and determine whether or not it is valid per the Luhn formula.
#
# The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.
#
# This number must pass the following test:
#
# Counting from rightmost digit (which is the check digit) and moving left, double the value of every second digit. For any digits that thus become 10 or more, subtract 9 from the result.
#
# E.g., 1111 becomes 2121, while 8763 becomes 7733 (from 2×6=12 → 12-9=3 and 2×8=16 → 16-9=7).
#
# Add all these digits together. For example, if 1111 becomes 2121, then 2+1+2+1 is 6; and 8763 becomes 7733, so 7+7+3+3 is 20.
#
# If the total ends in 0 (put another way, if the total modulus 10 is 0), then the number is valid according to the Luhn formula; otherwise it is not valid. So, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).
#
# Write a program that, given a number, can check if it is valid per the Luhn formula.
#
# BONUS:
#
# For an invalid number, add a check digit to make the number valid.
# ```
# l = Luhn.new(3554)
# l.valid?
# # => false
#
# l = Luhn.new(8763)
# l.valid?
# # => true
# ```
# Do this in Ruby.

class Luhn

  def initialize number
    @number = number
  end

  def prepare_digits_to_check
    all_numbers = []

    @number.digits.each_with_index do |digit, index|
      # puts "index: #{index}; digit: #{digit}"
      # if (index.odd?)
      #   digit *= 2
      # end
      digit *= 2 if index.odd?
      digit -= 9 if digit >= 10

      all_numbers << digit
    end
    all_numbers
  end

  def valid?
    num = prepare_digits_to_check

    total = num.inject(0, :+)

    if total % 10 == 0
      puts "#{@number} is a valid luhn number"
    else
      puts "#{@number} is NOT a valid luhn number"
      @number = @number + (10 - total % 10)
      puts "#{@number} would be a valid Luhn number"
    end

  end


end

l1 = Luhn.new(3554)
# l1.prepare_digits_to_check
l1.valid?

l2 = Luhn.new(8763)
l2.valid?
