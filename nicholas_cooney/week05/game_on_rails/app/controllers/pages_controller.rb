class PagesController < ApplicationController
  def home
  end

  def m8b
  end
    def fortune
      fortunes = ["yes", "no", "try again", "you will die, one day.", "Veganism was right all along", ""]
      @answer = fortunes.sample
      render :fortune
    end

  def sn
  end
  def guess
    @guess = params[:guess].to_i
    @random = rand(1..10)
    if @guess == @random
      @answer = "You guessed correct"
    else
      @answer = "Guess again"
    end
    render :guess
  end
end
