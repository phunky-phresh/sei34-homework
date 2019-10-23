require 'sinatra'
require 'sinatra/reloader'

get '/' do 
    erb :test
end
get '/testPass' do 
    erb :testPass
end
get '/testWrite' do 
    erb :testWrite
end
get '/feature' do 
    erb :feature
end
get '/refactor' do 
    erb :refactor
end
get '/refactorYes' do 
    erb :refactorYes
end
get '/testPassNo' do 
    erb :testPassNo
end