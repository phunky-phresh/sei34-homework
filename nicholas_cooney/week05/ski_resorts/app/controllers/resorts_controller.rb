class ResortsController < ApplicationController
  # def home
  #   @resorts = Resort.all
  # end
  def index
    @resorts = Resort.all
  end

  def show
    @resorts = Resort.find params[:id]
  end

  def new
  end

  def create
    resort = Resort.new
    resort.name = params[:name]
    resort.image = params[:image]
    resort.location = params[:location]
    resort.lifts = params[:lifts]
    resort.size = params[:size]
    resort.snow = params[:snow]
    resort.save
    redirect_to resort_path(resort.id)
  end

  def edit
    @resort = Resort.find params[:id]
  end
  def update
    resort = Resort.find params[:id]
    resort.name = params[:name]
    resort.image = params[:image]
    resort.location = params[:location]
    resort.lifts = params[:lifts]
    resort.size = params[:size]
    resort.snow = params[:snow]
    resort.save
    redirect_to resort_path(resort.id)
  end

  def destroy
    resort = Resort.find params[:id]
    resort.destroy
    redirect_to resorts_path
  end
end
