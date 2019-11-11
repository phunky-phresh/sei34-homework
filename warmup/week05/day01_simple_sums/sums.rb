# require 'pry'

# ```
# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
# ```
#
# For example:
#
# ```
# s1(4) = 0
# s2(4) = 10


class SimpleSums

  #setter
  def initialize number
    @number = number
  end

  # getter
  def number
    @number
  end

  def s1
    # sum_s1 = @number % 2
    # sum_s1
    @number % 2
  end

  def s2
    # sum_s2 = (@number * (@number +1))/2
    # sum_s2
    (1..@number).sum
  end




end

sum = SimpleSums.new(4)
p sum.number
p sum.s1
p sum.s2
