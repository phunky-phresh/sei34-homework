class RockPaperScissorsController < ApplicationController
  # def form
  # end
  def form
  end

  def throw
    @throw = params[:throw]
    @computer_choice = ['rock', 'paper', 'scissors'].sample
    result = [@throw, @computer_choice]
    possible_results = {
      :draw => [['rock','rock'],['paper','paper'],['scissors','scissors']],
      :win => [['rock','scissors'],['paper','rock'],['scissors','paper']],
      :lose => [['scissors','rock'],['rock','paper'],['paper','scissors']]
    }

    possible_results.each do |key, value|
      if value.include?(result)
        render key
      end
    end

    # if @throw == @computer_choice
    #   render :draw
    # elsif @throw == 'rock' && @computer_choice == 'scissors'
    #   render :win
    # elsif @throw == 'rock' && @computer_choice == 'paper'
    #   render :lose
    # elsif @throw == 'scissors' && @computer_choice == 'paper'
    #   render :win
    # elsif @throw == 'scissors' && @computer_choice == 'rock'
    #   render :lose
    # elsif @throw == 'paper' && @computer_choice == 'rock'
    #   render :win
    # elsif @throw == 'paper' && @computer_choice == 'scissors'
    #   render :lose
    # end
  end
end
