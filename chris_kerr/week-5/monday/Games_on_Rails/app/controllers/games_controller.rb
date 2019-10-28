class GamesController < ApplicationController
    def chooser
    end

    def magic
    end

    def magic_result
        #generate a random response
       possible_responses = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.']

        @response = possible_responses[rand(possible_responses.size)]
        
    end

    def numberguess
    end

    def numberguess_result
        guess = params[:num].to_i
        @computer = rand(1..10).to_i

        if guess == @computer
            @result = "You won!"
        else 
            @result = "You lost..."
        end
    end

    def scissorpaperrock
    end

    def scissorpaperrock_result 
        scr = ["scissor", "paper", "rock"]
        
        user_guess = scr.index params[:choice]
        scr.rotate! 1 if user_guess == 2 #rotate 1 moves everything 1 step right, rotate -1 moves everything 1 step left 
        scr.rotate! -1 if user_guess == 0 

        random_g = rand(0..2)

        ## user guess is now scr[1], and computer guess is random_g, can include a case to text the three outcomes

        case random_g
        when 0
            @computer = scr[0]
            @result = "Computer Won"
        when 1
            @computer = scr[1]
            @result = "It was a draw"
        when 2
            @computer = scr[2]
            @result = "You Won"
        end



    end

end