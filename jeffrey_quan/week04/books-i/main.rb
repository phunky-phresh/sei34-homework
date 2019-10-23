require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :form
end

get '/book' do
  @book_title = params[:book_title].capitalize
  begin
    @book_info = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
    @title = @book_info["items"][0]["volumeInfo"]["title"]
    @author = @book_info["items"][0]["volumeInfo"]["authors"][0]
    @thumbnail = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @description = @book_info["items"][0]["volumeInfo"]["description"]
  rescue
    redirect to('/')
  end
  erb :book
end
