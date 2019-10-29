class PagesController < ApplicationController
  #homepage definition
  def index
    @oceans = Ocean.all
  end


  #view individual
  def show
    @ocean = Ocean.find params[:id]
  end

  #create new
  def new
  end

  def create
    o = Ocean.new
    o.name = params[:name]
    o.area = params[:area]
    o.depth = params[:depth]
    o.max_salinity = params[:max_salinity]
    o.image = params[:image]
    o.save

    redirect_to ocean_path(o.id)
  end

  #Edit
  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
    o = Ocean.find params[:id]
    o.name = params[:name]
    o.area = params[:area]
    o.depth = params[:depth]
    o.max_salinity = params[:max_salinity]
    o.image = params[:image]
    o.save

    redirect_to ocean_path(o.id)
  end

  #delete
  def destroy
    o = Ocean.find params[:id]
    o.destroy

    redirect_to oceans_path
  end

end
