class MountainsController < ApplicationController
  def home
  end

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
    mountain.location = params[:location]
    mountain.elevation = params[:elevation]
    mountain.image = params[:image]
    mountain.fact = params[:fact]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.location = params[:location]
    mountain.elevation = params[:elevation]
    mountain.image = params[:image]
    mountain.fact = params[:fact]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end
end
