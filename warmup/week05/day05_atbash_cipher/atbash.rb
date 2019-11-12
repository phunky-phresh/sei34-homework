class Atbash

  def initialize input
    @word = input.downcase
    @abc = ('a'..'z').to_a
    @abc_reverse = @abc.reverse
  end

  # def encode
  #   message = ''
  #   # p @word
  #   # p @abc
  #   # p @abc_reverse
  #   @word.each_char do |letter|
  #     index = @abc.index(letter)
  #     cipher_character = @abc_reverse[index]
  #
  #     message << cipher_character
  #   end
  #
  #   message
  # end

  def encode
    @word.chars.map { |letter|
      index = @abc.index(letter)
      cipher_character = @abc_reverse[index]
    }.join
  end

end


puts "what's your secret work?"

word = gets.chomp

puts "=" * 20
cipher = Atbash.new(word)

puts cipher.encode
