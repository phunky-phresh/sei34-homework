class CountriesController < ApplicationController
  def index
    @countries = Country.all
    @parks = Park.all
    @climbs = Climb.all
  end

  def new
    @country = Country.new
  end

  def create
    country = Country.create country_params
    redirect_to country
  end

  def edit
    @country = Country.find params[:id]
  end

  def update 
    country = Country.find params[:id]
    country.update country_params
    redirect_to country
  end 

  def show
    @country = Country.find params[:id]
  end

  def destroy
    country = Country.find params[:id]
    country.parks.each do | park | 
      park.climbs.destroy_all
    end
    country.parks.destroy_all
    country.destroy
    redirect_to '/'
  end

  private
  def country_params
    params.require(:country).permit(:name, :continent, :area)
  end
end
