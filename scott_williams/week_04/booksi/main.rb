require 'sinatra' # Ruby server
require 'sinatra/reloader' # Saves you from stopping and starting sinatra server
require 'httparty' # A ruby way to access available APIs without a gem
require 'pry' # debugger

# API key
# none required

# home page
get '/' do
  erb :index
end

get '/result' do
  @title = params[:title]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  # https://www.googleapis.com/books/v1/volumes?q=title:Ulysses
  book_info = HTTParty.get url;
  begin
    @book_desc = book_info["items"][0]["volumeInfo"]["description"]
    @book_img = book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @author = book_info["items"][0]["volumeInfo"]["authors"].join(' ')
  rescue
    redirect to ('/')
  end

# binding.pry
  erb :result
end
