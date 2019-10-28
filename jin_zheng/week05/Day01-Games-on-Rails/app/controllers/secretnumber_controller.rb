class SecretnumberController < ApplicationController

    def home
    end

    def result
        guess = params[:number].to_i
        @number = (1..10).to_a.sample
        @bool = guess == @number

        render :result
    end
end
