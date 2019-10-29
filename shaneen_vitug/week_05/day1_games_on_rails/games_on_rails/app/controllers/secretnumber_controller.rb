class SecretnumberController < ApplicationController

  def number
  end

  def result
    @num = rand(1..10)
    @guess = params[:guess_number]
    if @num == @guess.to_i
      puts @answer = "Correct!"
    else
      puts @answer = "Wrong guess"
    end
  end

end
