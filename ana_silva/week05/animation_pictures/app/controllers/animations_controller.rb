class AnimationsController < ApplicationController
  def index
    @animations = Animation.all
  end

  def new
    @animation = Animation.new
  end

  def create
    animation = Animation.create animation_params
    redirect_to animation 
  end

  def edit
    @animation = Animation.find params[:id]
  end

  def update
    animation = Animation.find params[:id]
    animation.update animation_params
    redirect_to animation
  end

  def show
    @animation = Animation.find params[:id]
  end

  def destroy
    @animation = Animation.find params[:id]
    @animation.destroy
    redirect_to animations_path
  end

  private

  def animation_params
    params.require(:animation).permit(:title, :image, :year, :actors, :box_office, :producer_id)
  end

end
