class ParksController < ApplicationController
  def new
    @park = Park.new
  end

  def create
    park = Park.create park_params
    redirect_to park
  end

  def edit
    @park = Park.find params[:id]
  end

  def update 
    park = Park.find params[:id]
    park.update park_params
    redirect_to park
  end 

  def show
    @park = Park.find params[:id]
  end

  def destroy
    park = Park.find params[:id]
    park.climbs.destroy
    park.destroy
    redirect_to '/'
  end

  private
  def park_params
    params.require(:park).permit(:name, :country_id, :area, :numb_climbs, :image)
  end
end
