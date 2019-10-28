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
        random_g = rand(1..3).to_i

        case random_g
        when 1 
            @computer = "scissor"
        when 2 
            @computer = "paper"
        when 3 
            @computer = "rock"
        end


        if guess == @computer
            @result = "You won!"
        else 
            @result = "You lost..."
        end
    end

    def scissorpaperrock
    end

    def scissorpaperrock_result
        user_guess = params[:choice]
    end

end