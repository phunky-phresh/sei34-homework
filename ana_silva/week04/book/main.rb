require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'


get '/' do
  erb :home
end

get '/result' do
  @title = params[:title].capitalize.split().join("")
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"

  book_info = HTTParty.get url;

  @book_title = book_info["items"][0]["volumeInfo"]["title"]

  @authors = book_info["items"][0]["volumeInfo"]["authors"].join(", ")

  @book_description = book_info["items"][0]["volumeInfo"]["description"]

  @cover_image = book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :result
end
