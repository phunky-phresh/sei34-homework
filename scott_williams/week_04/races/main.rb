require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'pry'

# Rails sets all this up for you automatically.
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Rider < ActiveRecord::Base
  belongs_to :races, :optional => true
end

class Race < ActiveRecord::Base
end

class Race < ActiveRecord::Base
  has_many :riders
end

get '/pry' do
  binding.pry
end

get '/' do
  erb :home
end

# Races ########################################################
# INDEX
get '/races' do
  @races = Race.all
  erb :races_index
end

# NEW
get '/races/new' do
  erb :races_new
end

# CREATE
post '/races' do
  # query = "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  # query_db query
  race = Race.new
  race.name = params[:event]
  race.family = params[:country]
  race.family = params[:stages]
  race.image = params[:image]
  race.save
  redirect to("/races/#{ race.id }") # GET request
end

# SHOW or POST
get '/races/:id' do
  # get the race from the database
  @race = Race.find params[:id]
  # render a view - use erb to get
  erb :races_show
end

# EDIT -- go to edit page
get '/races/:id/edit' do
  @race = Race.find params[:id]
  erb :races_edit
end

# UPDATE -- send the EDIT information to the UPDATE post, the redirect to full list
post '/races/:id' do
  race = Race.find params[:id]
  race.event = params[:event]
  race.image = params[:image]
  race.save
  redirect to ("/races/#{ race.id }") # GET request
end




# Ridesr ########################################################
# INDEX
get '/riders' do
  @riders = Rider.all
  erb :riders_index
end

# SHOW or POST
get '/riders/:id' do
  # get the butterfly from the database
  @rider = Rider.find params[:id]
  # render a view - use erb to get
  erb :riders_show
end

# EDIT
get '/riders/:id/edit' do
  @rider = Rider.find params[:id]
  erb :riders_edit
end
