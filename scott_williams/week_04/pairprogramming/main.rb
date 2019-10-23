require 'sinatra' # Ruby server
require 'sinatra/reloader' # Saves you from stopping and starting sinatra server
require 'httparty' # A ruby way to access available APIs without a gem
require 'pry' # debugger

# API keys
# none required

# home page
get '/' do
  erb :index
end

get '/index' do
  erb :index
end

get '/test' do
  erb :test
end

get '/testpass' do
  erb :testpass
end

get '/writetest' do
  erb :writetest
end

get '/refactor' do
  erb :refactor
end

get '/writeanswer' do
  erb :writeanswer
end

get '/enoughanswer' do
  erb :enoughanswer
end

get '/refactoranswer' do
  erb :refactoranswer
end

get '/newfeature' do
  erb :newfeature
end
