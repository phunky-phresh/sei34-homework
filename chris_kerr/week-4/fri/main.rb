require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

class Type < ActiveRecord::Base
    belongs_to :heights
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

get '/:height' do
    @height = Height.find params[:height]
    erb :heights
end

get '/clouds/:cloud' do
    @cloud = Type.find params[:cloud]
    erb :cloud
end

after do 
    ActiveRecord::Base.connection.close 
end