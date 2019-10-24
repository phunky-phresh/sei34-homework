require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'



get '/' do
  erb :home
end

get '/book' do
  @title = params[:title].downcase
  @url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
  @book_info = HTTParty.get(@url)
  @image = @book_info["items"].first["volumeInfo"]["imageLinks"]

  @thumbnail = @image["thumbnail"]
  @summary = @book_info["items"].first["volumeInfo"]["description"]
# binding.pry
  erb :book
end
