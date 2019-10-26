require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
);

ActiveRecord::Base.logger = Logger.new(STDERR)


# connection between two sql
class Profile < ActiveRecord::Base
  belongs_to :terrain, :optional => true
end

class Terrain < ActiveRecord::Base
  has_many :profiles
end

get '/pry' do
  binding.pry
end

get '/' do
  erb :home
end

### Main Index ####
get '/profiles' do
  @profiles = Profile.all
  erb :profiles_index
end

get '/profiles/new' do
  erb :profiles_new
end

## CREATE

post '/profiles' do
  profile = Profile.new
  profile.name = params[:name]
  profile.skill = params[:skill]
  profile.image = params[:image]
  profile.description = params[:description]
  profile.save
  redirect to("/profiles/#{ profile.id }")
end

#SHOW
get '/profiles/:id' do
  @profiles = Profile.find params[:id]
  erb :profiles_show
end

#EDIT
get '/profiles/:id/edit' do
  @profiles = Profile.find params[:id]
  erb :profile_edit
end

#UPDATE
post '/profiles/:id' do
  profile = Profile.find params[:id]
  profile.name = params[:name]
  profile.skill = params[:skill]
  profile.image = params[:image]
  profile.description = params[:description]
  profile.save
  redirect to("/profiles/#{ params[:id] }")
end

#DELETE

get '/profiles/:id/delete' do
  profile = Profile.find params[:id]
  profile.destroy
  redirect to("/profiles")
end
