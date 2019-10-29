class GlaciersController < ApplicationController

    def home
        @glaciers = Glacier.all
    end

end

