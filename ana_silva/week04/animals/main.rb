require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "pry"
require "active_record"

#set up
ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "database.sqlite3"
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Animal < ActiveRecord::Base
  belongs_to :habitat, :optional => true
end

class Habitat < ActiveRecord::Base
  has_many :animals
end


get "/pry" do
  binding.pry
end

get "/" do
  erb :home
end

#########ANIMALS################

#index
get "/animals" do
  @habitats = Habitat.all
  @animals = Animal.all
  erb :animals_index
end

#NEW
get "/animals/new" do
  erb :animal_new
end

#CREATE
post "/animals" do
  animal = Animal.new
  animal.name = params[:name]
  animal.diet = params[:diet]
  animal.image = params[:image]
  animal.habitat_id = params[:habitat_id]
  animal.save
  redirect to("/animals/#{animal.id}")
end

#EDIT
get "/animals/:id/edit" do
  @animal = Animal.find params[:id]
  erb :animal_edit
end

# UPDATE
post "/animals/:id" do
  animal = Animal.find params[:id]
  animal.name = params[:name]
  animal.diet = params[:diet]
  animal.image = params[:image]
  animal.habitat_id = params[:habitat_id]
  animal.save
  redirect to("/animals/#{animal.id}")
end

#delete
get "/animals/:id/delete" do
  animal = Animal.find params[:id]
  animal.destroy
  redirect to("/animals")
end

#show
get "/animals/:id" do
  @animal = Animal.find params[:id]
  erb :animal_show
end

#########HABITATS################

#index
get "/habitats" do
  @habitats = Habitat.all
  erb :habitats_index
end

#NEW
get "/habitats/new" do
  erb :habitat_new
end

# CREATE
post "/habitats" do
  habitat = Habitat.new
  habitat.name = params[:name]
  habitat.image = params[:image]
  habitat.save
  redirect to("/habitats/#{habitat.id}")
end

#EDIT
get "/habitats/:id/edit" do
  @habitat = Habitat.find params[:id]
  erb :habitat_edit
end

# UPDATE
post "/habitats/:id" do
  habitat = Habitat.find params[:id]
  habitat.name = params[:name]
  habitat.image = params[:image]
  habitat.save
  redirect to("/habitats/#{habitat.id}")
end

# delete
get "/habitats/:id/delete" do
  habitat = Habitat.find params[:id]
  habitat.destroy
  redirect to("/habitats")
end

#show
get "/habitats/:id" do
  @habitat = Habitat.find params[:id]
  erb :habitat_show
end


after do
  ActiveRecord::Base.connection.close
end
