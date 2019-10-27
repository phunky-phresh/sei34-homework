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
class Race < ActiveRecord::Base
  belongs_to :rider, :optional => true
end

class Rider < ActiveRecord::Base
  has_many :races
end

class Rider < ActiveRecord::Base
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
  race.event = params[:event]
  race.nickname = params[:nickname]
  race.country = params[:country]
  race.stages = params[:stages]
  race.image = params[:image]
  race.rider_id = params[:rider_id]
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
  race.nickname = params[:nickname]
  race.country = params[:country]
  race.stages = params[:stages]
  race.image = params[:image]
  race.rider_id = params[:rider_id]
  race.save
  redirect to ("/races/#{ race.id }") # GET request
end

# DESTROY
get '/races/:id/delete' do
  race = Race.find params[:id]
  race.destroy
  redirect to("/races")
end



# Riders ########################################################
# INDEX
get '/riders' do
  @riders = Rider.all
  erb :riders_index
end

# NEW
get '/riders/new' do
  erb :riders_new
end

# CREATE
post '/riders' do
  # query = "INSERT INTO riders (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:team] }', '#{ params[:country]', '#{ params[:image] }', '#{ params[:race_id] }')"
  # query_db query
  rider = Rider.new
  rider.name = params[:name]
  rider.team = params[:team]
  rider.country = params[:country]
  rider.image = params[:image]
  rider.save
  redirect to("/riders/#{ rider.id }") # GET request
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

# UPDATE -- send the EDIT information to the UPDATE post, the redirect to full list
post '/riders/:id' do
  rider = Rider.find params[:id]
  rider.name = params[:name]
  rider.team = params[:team]
  rider.country = params[:country]
  rider.image = params[:image]
  rider.save
  redirect to ("/riders/#{ rider.id }") # GET request
end

# DESTROY
get '/riders/:id/delete' do
  rider = Rider.find params[:id]
  rider.destroy
  redirect to("/riders")
end

after do
  ActiveRecord::Base.connection.close
end
