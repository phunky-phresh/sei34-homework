class RpsController < ApplicationController
  def home
  end

  def rps
    moves = ["Scissors", "Paper", "Rock"]
    @computer = moves.sample
    @move = params[:move]
    @result = case 
    when @computer == @move
      "DRAW!"
    when @computer == "Rock" && @move == "Scissors"
      "Computer wins!"
    when @computer == "Paper" && @move == "Rock"
      "Computer wins!"
    when @computer == "Scissors" && @move == "Paper"
      "Computer wins!"
    else
      "You Win!"
    end
    render :rps
  end
end
