class RpsController < ApplicationController
  def throw
    render :throw
  end

  def outcome
    @index =  {
      0=> 'Rock',
      1=> 'Paper',
      2=> 'Scissors'
    }
    @player = params[:throw].to_i
    @computer = rand 3
    @result = case true
    when @player == @computer then 'Draw'
    when @computer - @player == 1 || @computer - @player = -2 then 'You Lose!'
    else
      'You Win!'
    end

    render :outcome
  end
end
