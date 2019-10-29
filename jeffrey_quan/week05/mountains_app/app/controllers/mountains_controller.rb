class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.height = params[:height]
    mountain.range = params[:range]
    mountain.countries = params[:countries]
    mountain.continent = params[:continent]
    mountain.year_first_ascent = params[:year_first_ascent]
    mountain.climber_first_ascent = params[:climber_first_ascent]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]

  end

  def update
    @mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.height = params[:height]
    mountain.range = params[:range]
    mountain.countries = params[:countries]
    mountain.continent = params[:continent]
    mountain.year_first_ascent = params[:year_first_ascent]
    mountain.climber_first_ascent = params[:climber_first_ascent]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end

end
