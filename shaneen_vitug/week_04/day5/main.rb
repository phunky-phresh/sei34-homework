require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Country < ActiveRecord::Base
  belongs_to :continent, :optional => true
end

class Continent < ActiveRecord::Base
  has_many :countries
end

get '/pry' do
  binding.pry
end

get '/' do
  erb :home
end

# INDEX or Lists of Countries 1st step
get '/countries' do
  @countries = Country.all
  erb :countries_index
end

# NEW 3rd step
get '/countries/add' do
  erb :countries_add
end

# CREATE 4th step
post '/countries' do
  country = Country.new
  country.name = params[:name]
  country.capitalcity = params[:capitalcity]
  country.languages = params[:languages]
  country.visited = params[:visited]
  country.flag = params[:flag]
  country.image = params[:image]
  country.save
  redirect to ("/countries/#{country.id}")
end

# SHOW 2nd step
get '/countries/:id' do
  @country = Country.find params[:id]
  erb :countries_show
end

# EDIT 6th step
get '/countries/:id/edit' do
  @country = Country.find params[:id]
  erb :countries_edit
end

# UPDATE 7th step
post '/countries/:id' do
  country = Country.find params[:id]
  country.name = params[:name]
  country.capitalcity = params[:capitalcity]
  country.languages = params[:languages]
  country.visited = params[:visited]
  country.flag = params[:flag]
  country.image = params[:image]
  country.save
  redirect to ("/countries/#{country.id}")
end

# DELETE 5th step
get '/countries/:id/delete' do
  country = Country.find params[:id]
  country.destroy
  redirect to("/countries")
end


#--------------
# INDEX or Lists of Continents
get '/continents' do
  @continents = Continent.all
  erb :continents_index
end

# NEW
get '/continents/add' do
  erb :continents_add
end

# CREATE
post '/continents' do
  continent = Continent.new
  continent.name = params[:name]
  continent.size = params[:size]
  continent.population = params[:population]
  continent.numofcountries = params[:numofcountries]
  continent.fact = params[:fact]
  continent.image = params[:image]
  continent.save
  redirect to ("/continents/#{continent.id}")
end

# SHOW each continent
get '/continents/:id' do
  @continent = Continent.find params[:id]
  erb :continents_show
end

# EDIT
get '/continents/:id/edit' do
  @continent = Continent.find params[:id]
  erb :continents_edit
end

# UPDATE
post '/continents/:id' do
  continent = Continent.find params[:id]
  continent.name = params[:name]
  continent.size = params[:size]
  continent.population = params[:population]
  continent.numofcountries = params[:numofcountries]
  continent.fact = params[:fact]
  continent.image = params[:image]
  continent.save
  redirect to ("/continents/#{continent.id}")
end

# DELETE
get '/continents/:id/delete' do
  continent = Continent.find params[:id]
  continent.destroy
  redirect to ('/continents')
end

after do
  ActiveRecord::Base.connection.close
end
