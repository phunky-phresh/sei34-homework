class SecretNumberController < ApplicationController
  def form
  end

  def result
    @secret_number = rand(1..10)
    @guessed_number = params[:guess]
    if @guessed_number == @secret_number
      render :win
    else
      render :lose
    end
  end

  def win
  end

  def lose
  end
end
