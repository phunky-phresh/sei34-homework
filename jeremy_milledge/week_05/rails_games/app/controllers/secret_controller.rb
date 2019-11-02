class SecretController < ApplicationController
  def guess
    render :guess
  end
  def result
    @num = params[:num]
    @secret = rand(1..10).to_s
    @result = @num == @secret ? 'win' : 'lose'
    render :result
  end
end
