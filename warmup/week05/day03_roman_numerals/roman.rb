#Write a program that will convert Arabic numerals to Roman numerals.

# In Roman numerals 1990 is MCMXC:
#
# 1000=M 900=CM 90=XC
#
# 2008 is written as MMVIII:
#
# 2000=MM 8=VIII

class Roman

  def initialize
    @roman_numerals = {
      1000 => 'M',
      900 => 'CM',
      500 => 'D',
      400 => 'CD',
      100 => 'C',
      90 => 'XC',
      50 => 'L',
      40 => 'XL',
      10 => 'X',
      9 => 'IX',
      5 => 'V',
      4 => 'IV',
      1 => 'I'
    }

  end

  def convert number
    output = ""


    @roman_numerals.each do |key, value|
      # puts "#{key}: #{value}"
      puts "EACH: #{key} => #{value}, number: #{number}"
      #This loop will not run at all if our current key is GREATER than our input number
      while number >= key
        output += value
        puts "   WHILE: #{number} >= #{ key}, so add #{value} to output; new output #{output}"

        puts "   WHILE: number -= key: #{number} - #{key} = #{number - key}"
        number -= key

        puts " ---------- end WHILE"
      end

      break if number.zero?

      puts " ............ end EACH"
    end



    output
  end


end


to_roman = Roman.new

p to_roman.convert 1990
