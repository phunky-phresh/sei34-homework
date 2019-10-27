require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"
require "pry"

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Plant < ActiveRecord::Base
    # has_many :plant_pest
    # has_many :pests, through: :plant_pest
    has_many :pests
end

class Pest < ActiveRecord::Base
    # has_many :plant_pest
    # has_many :plants, through: :plant_pest
    belongs_to :plant, :optional=>true
end

class PlantPest < ActiveRecord::Base
    # belongs_to :plant
    # belongs_to :pest
end

get "/pry" do
    binding.pry
end

get "/" do
    erb :home
end

get "/select" do
    @plants = Plant.where category: params[:plant_selected] if params[:plant_selected].present?
    @pests = Pest.where name: params[:pest_selected] if params[:pest_selected].present?
    erb :home
end

post "/plant/new" do
    plant = Plant.new
    plant.name = params[:plant_name]
    plant.category = params[:plant_category]
    plant.difficulty = params[:difficulty]
    plant.water_demand = params[:water_demand]
    plant.sunlight_demand = params[:sunlight_demand]
    plant.humidity = params[:humidity_demand]
    plant.rareness = params[:rareness]
    plant.leaves_image = params[:leaves_image]
    plant.plant_image = params[:plant_image]
    plant.save

    erb:home
    redirect to('/')
end

post "/pest/new" do
    pest = Pest.new
    pest.name = params[:pest_name]
    pest.pest_control = params[:pest_control]
    pest.image = params[:pest_image]
    pest.plant_id = params[:pest_plant_id]
    pest.save

    erb:home
    redirect to('/')
end

get "/plant/show/:plant_id" do
    @plant = Plant.find params[:plant_id]
    erb :home
end

get "/pest/show/:pest_id" do
    @pest = Pest.find params[:pest_id]
    erb :home
end

post "/plant/:plant_id" do
    plant = Plant.find params[:plant_id]
    plant.name = params[:plant_name]
    plant.category = params[:plant_category]
    plant.difficulty = params[:difficulty]
    plant.water_demand = params[:water_demand]
    plant.sunlight_demand = params[:sunlight_demand]
    plant.humidity = params[:humidity_demand]
    plant.rareness = params[:rareness]
    plant.leaves_image = params[:leaves_image]
    plant.plant_image = params[:plant_image]
    plant.save
    redirect to("/plant/show/#{plant.id}")
end

post "/pest/:pest_id" do
    pest = Pest.find params[:pest_id]
    pest.name = params[:pest_name]
    pest.pest_control = params[:pest_control]
    pest.image = params[:pest_image]
    pest.plant_id = params[:pest_plant_id]
    pest.save
    redirect to("/pest/show/#{pest.id}")
end

get "/plant/:id/delete" do
    plant = Plant.find params[:id]
    plant.destroy
    redirect to("/")
end

get "/pest/:id/delete" do
    pest = Pest.find params[:id]
    pest.destroy
    redirect to("/")
end

before do
    @plants = Plant.all
    @plants_category = Plant.pluck :category
    @plants_name = Plant.pluck :name
    @plants_category.compact!
    @pests = Pest.all
    @pests_name = Pest.pluck :name
    @plants = Plant.where category: params[:plant_selected] if params[:plant_selected].present?
    @pests = Pest.where name: params[:pest_selected] if params[:pest_selected].present?
end
