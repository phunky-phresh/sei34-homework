class GamesController < ApplicationController

  def home
  end

  def m8b
  end

  def answer
    @question = params[:question]
    answers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.']
    @answer = answers.sample
  end

  def secret_number
  end

  def guess
    @guess = params[:guess]
    @number = rand(1..10)
    @result = (@guess.to_i == @number) ? "Bingo!" : "Guess again!"
    @result
  end

  def rps
  end

  def play
    @play = params[:play]
    @rand_play = ["rock", "paper", "scissors"].sample
    @result = "It's a tie!" if @play == @rand_play
    if @play == "rock"
      @result = "You win!" if @rand_play == "scissors"
      @result = "You lost!" if @rand_play == "paper"
    elsif @play == "paper"
      @result = "You win!" if @rand_play == "rock"
      @result = "You lost!" if @rand_play == "scissors"
    elsif @play == "scissors"
      @result = "You win!" if @rand_play == "paper"
      @result = "You lost!" if @rand_play == "rock"
    end
  end

end
