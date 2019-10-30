class ManufacturersController < ApplicationController
  #show all
  def index
    @mans = Manufacturer.all
  end

  #create
  def new
    @man = Manufacturer.new
  end
  def create
    man = Manufacturer.create man_params
    redirect_to man
  end

  #update
  def edit
    @man = Manufacturer.find params[:id]
  end

  def update
    man = Manufacturer.find params[:id]
    man.update man_params
    redirect_to man
  end
  #show single
  def show
    @man = Manufacturer.find params[:id]
  end

  #destroy
  def destroy
    man = Manufacturer.find params[:id]
    man.destroy
    redirect_to manufacturers_path
  end
  private

  def man_params
    params.require(:manufacturer).permit(:name, :parent, :origin, :founded)
  end
end
