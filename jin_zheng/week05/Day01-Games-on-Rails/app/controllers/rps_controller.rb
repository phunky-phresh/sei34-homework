class RpsController < ApplicationController
    def home
    end

    def compare
        @computer = ['rock', 'paper', 'scissors'].sample
        @player = params[:throw]

        if @computer == @player
            @result = 'Draw!'
        elsif [['rock','scissors'],['scissors','paper'],['paper','rock']].include? [@player,@computer]
            @result = 'You win!'
        else
            @result = 'You lose!'
        end


        render :home
    end
end
