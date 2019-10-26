require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

class Type < ActiveRecord::Base
    belongs_to :height
end

class Height < ActiveRecord::Base
    has_many :types
end

## view pages for home, clouds, types, 
get '/' do
    @types = Type.all
    erb :home    
end

get '/pry' do
    binding.pry
end

get '/add-cloud' do
    @heights = Height.all
    erb :new
end

post '/' do
    cloud = Type.new
    cloud.name = params[:name]
    cloud.summary = params[:summary]
    cloud.description = params[:description]
    cloud.altitude_range = params[:altitude_range]
    cloud.image = params[:image]
    cloud.height_id = params[:height_id]
    cloud.save
    redirect to "/clouds/#{cloud.id}"
end

get '/:height' do
    @height = Height.find params[:height]
    erb :heights
end

get '/clouds/:cloud' do
    @cloud = Type.find params[:cloud]
    erb :cloud
end

post '/clouds/:cloud' do
    cloud = Type.find params[:cloud]
    cloud.name = params[:name]
    cloud.summary = params[:summary]
    cloud.description = params[:description]
    cloud.altitude_range = params[:altitude_range]
    cloud.image = params[:image]
    cloud.height_id = params[:height_id]
    cloud.save
    redirect to "/clouds/#{params[:cloud]}"
end

get '/clouds/:cloud/edit' do
    @cloud = Type.find params[:cloud]
    @heights = Height.all
    erb :edit
end

get '/clouds/:cloud/delete' do
    cloud = Type.find params[:cloud]
    cloud.destroy
    redirect to '/'
end

after do 
    ActiveRecord::Base.connection.close 
end