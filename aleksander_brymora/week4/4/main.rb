require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
    erb :first_question
end

get '/firstno' do
    erb :firstno
end

get '/firstyes' do
    erb :firstyes
end

get '/secondno' do
    erb :secondno
end

get '/secondyes' do
    erb :secondyes
end

get '/thirdno' do
    erb :thirdno
end

get '/thirdyes' do
    erb :thirdyes
end

