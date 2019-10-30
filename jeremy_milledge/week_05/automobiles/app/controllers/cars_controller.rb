class CarsController < ApplicationController
  #show all
  def index
    @cars = Car.all
  end

  #create
  def new
    @car = Car.new
  end
  def create
    car = Car.create car_params
    redirect_to car
  end

  #update
  def edit
    @car = Car.find params[:id]
  end

  def update
    car = Car.find params[:id]
    car.update car_params
    redirect_to car
  end
  #show single
  def show
    @car = Car.find params[:id]
  end

  #destroy
  def destroy
    car = Car.find params[:id]
    car.destroy
    redirect_to cars_path
  end



  private

  def car_params
    params.require(:car).permit(:model, :year, :style, :engine_capacity, :cylinders, :image, :manufacturer_id)
  end
end
