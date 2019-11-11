class VolcanoesController < ApplicationController
    def index
    end

    def new
    end

    def show
        @volcano = Volcano.find params[:id]
    end

    def create
        volcano = Volcano.new
        volcano.name = params[:name]
        volcano.continent = params[:continent]
        volcano.category = params[:category]
        volcano.image = params[:image]
        volcano.save
        redirect_to volcano_path(volcano[:id])
    end

    def edit
        @volcano = Volcano.find params[:id]
    end

    def update
        volcano = Volcano.find params[:id]
        volcano.name = params[:name]
        volcano.continent = params[:continent]
        volcano.category = params[:category]
        volcano.image = params[:image]
        volcano.save
        redirect_to volcano_path(volcano[:id])
    end

    def destroy
        volcano = Volcano.find params[:id]
        volcano.destroy
        redirect_to volcanoes_path
    end

    def delete
        @volcano = Volcano.find params[:id]
    end
end
