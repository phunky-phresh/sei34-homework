class ClimbsController < ApplicationController
  def index
    @climbs = Climb.all
  end

  def new
    @climb = Climb.new
  end

  def create
    climb = Climb.create climb_params
    redirect_to climb
  end

  def edit
    @climb = Climb.find params[:id]
  end

  def update 
    climb = Climb.find params[:id]
    climb.update climb_params
    redirect_to climb
  end 

  def show
    @climb = Climb.find params[:id]
  end

  def destroy
    climb = Climb.find params[:id]
    climb.destroy
    redirect_to '/'
  end

  private
  def climb_params
    params.require(:climb).permit(:name, :park_id, :height, :grade, :first_ascent)
  end
end
