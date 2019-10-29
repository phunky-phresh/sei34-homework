class RockpaperscissorsController < ApplicationController
  def shape
  end

  def play
    shape = ['rock', 'paper', 'scissors']
    @pick = shape.shuffle.first
    @throw = params[:shape]
    if @throw == @pick
      puts @answer = "It's a tie!"
    elsif @throw == 'rock' && @pick == 'scissors'
      puts @answer = "You win!"
    elsif @throw == 'rock' && @pick == 'paper'
      puts @answer = "You can do beter!"
    elsif @throw == 'scissors' && @pick == 'rock'
      puts @answer = "You lose"
    elsif @throw == 'scissors' && @pick == 'paper'
      puts @answer == "Good job!"
    elsif @throw == 'paper' && @pick == 'rock'
      puts @answer = "Nice work!"
    elsif @throw == 'paper' && @pick == 'scissors'
      puts @answer = "Oh no!"
    end
  end
end
