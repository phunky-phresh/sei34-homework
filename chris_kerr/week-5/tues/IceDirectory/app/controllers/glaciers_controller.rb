class GlaciersController < ApplicationController

    def home
        @glaciers = Glacier.all
    end

    def new
    end

    def addNew
        glacier = Glacier.new
        glacier.name = params[:name]
        glacier.length = params[:length]
        glacier.volume = params[:volume]
        glacier.image = params[:image]
        glacier.country = params[:country]
        glacier.save
        redirect_to root_path
    end

    def show
        @glacier = Glacier.find params[:id]
    end

    def edit
        @glacier = Glacier.find params[:id]
    end

    def delete
        glacier = Glacier.find params[:id]
        glacier.destroy
        redirect_to root_path
    end

    def submitEdit
        glacier = Glacier.find params[:id]
        glacier.name = params[:name]
        glacier.length = params[:length]
        glacier.volume = params[:volume]
        glacier.image = params[:image]
        glacier.country = params[:country]
        glacier.save
        redirect_to glacier_path(glacier.id)
    end

end

