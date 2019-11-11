class ProducersController < ApplicationController
  def index
    @producers = Producer.all
  end

  def new
    @producer = Producer.new
  end

  def create
    producer = Producer.create producer_params
    redirect_to producer
  end

  def edit
    @producer = Producer.find params[:id]
  end

  def update
    @producer = Producer.find params[:id]
    @producer.update producer_params
    redirect_to @producer
  end

  def show
    @producer = Producer.find params[:id]
  end

  def destroy
    @producer = Producer.find params[:id]
    @producer.destroy
    redirect_to producers_path
  end

  private

  def producer_params
    params.require(:producer).permit(:name, :foundation_year, :logo)
  end

end
