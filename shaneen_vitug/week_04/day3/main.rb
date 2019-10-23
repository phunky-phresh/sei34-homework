require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :home
end

get '/cover' do

  @title = params[:title].capitalize
  begin
    @url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
    @book_info = HTTParty.get @url
    @cover_page = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  rescue
    redirect to('/')
  end
  erb :cover
end
