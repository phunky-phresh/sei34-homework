require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
    erb :search
end
    # binding.pry

get '/result' do
    book = params[:book]
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{book}"
    info = HTTParty.get url
    @img = info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
    @title = info["items"].first["volumeInfo"]["title"]
    @authors = info["items"].first["volumeInfo"]['authors'].join(", ")
    @description = info["items"].first["volumeInfo"]["description"]
    @rating = info["items"].first["volumeInfo"]["averageRating"]
    # binding.pry
    erb :result
end