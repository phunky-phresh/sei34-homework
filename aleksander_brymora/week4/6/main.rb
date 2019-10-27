require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'httparty'
require 'pry'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Beer < ActiveRecord::Base
    belongs_to :type, :optional => true
end

class Type < ActiveRecord::Base
    has_many :beers
end

get '/pry' do
    binding.pry
end

get '/' do
    url = "https://api.thecatapi.com/v1/images/search"
    info = HTTParty.get url
    @image = info.first["url"]
    erb :home
end

# INDEX
get '/beers' do 
    @beers = Beer.all
    erb :beers_index
end

# NEW
get '/beers/new' do 
    erb :beers_new
end

# CREATE
post '/beers' do
    beer = Beer.new
    beer.name = params[:name]
    beer.percentage = params[:percentage]
    beer.image = params[:image]
    beer.type_id = params[:type_id]
    beer.save
    redirect to ("/beers/#{beer.id}")
end

# SHOW
get '/beers/:id' do 
    @beer = Beer.find params[:id]
    erb :beers_show
end

# EDIT
get '/beers/:id/edit' do 
    @beer = Beer.find params[:id]
    erb :beer_edit
end

# UPDATE
post '/beers/:id' do
    beer = Beer.find params[:id]
    beer.name = params[:name]
    beer.percentage = params[:percentage]
    beer.image = params[:image]
    beer.type_id = params[:type_id]
    beer.save
    redirect to ("/beers/#{beer.id}")
end

# DESTROY
get '/beers/:id/delete' do 
    beer = Beer.find params[:id]
    beer.destroy
    redirect to ("/beers")
end

# TYPES ###################################################################

# INDEX
get '/types' do 
    @types = Type.all
    erb :types_index
end

# NEW
get '/types/new' do 
    erb :types_new
end

# CREATE
post '/types' do 
    type = Type.new
    type.name = params[:name]
    type.description = params[:description]
    type.image = params[:image]
    type.save
    redirect to ("/types/#{type.id}")
end

# SHOW
get '/types/:id' do
    @type = Type.find params[:id]
    erb :types_show
end

# EDIT
get '/types/:id/edit' do 
    @type = Type.find params[:id]
    erb :type_edit
end

# UPDATE
post '/types/:id' do
    type = Type.find params[:id]
    type.name = params[:name]
    type.description = params[:description]
    type.image = params[:image]
    type.save
    redirect to ("/types/#{type.id}")
end

# DELETE
get '/types/:id/delete' do 
    type = Type.find params[:id]
    type.destroy
    redirect to ("/types")
end

after do
    ActiveRecord::Base.connection.close
end