require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pry'


get '/' do
  erb :form
end

get '/price' do
  
   @book_img = params[:book_img]

   # begin



  @url = "https://www.googleapis.com/books/v1/volumes?q=" + @book_img
   book_info = HTTParty.get(@url)

  @info =book_info["items"][0]["volumeInfo"]["imageLinks"]["smallThumbnail"]

# rescue
#  redirect to('/')


  erb :price
  # @info.close.to_s 
end